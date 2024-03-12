import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, bezier, type Vector2 } from '../../lib/animate';
import { skills } from '../../icons';

const iconSize = 32;

@Component({
  selector: 'app-fireflies',
  standalone: true,
  imports: [],
  templateUrl: './fireflies.component.html',
  styleUrl: './fireflies.component.css',
})
export class FirefliesComponent implements AfterViewInit {
  @ViewChild('wrapper') el!: ElementRef<HTMLInputElement>;

  window: Document['defaultView'] = null;

  constructor(@Inject(DOCUMENT) doc: Document) {
    this.window = doc.defaultView;
  }

  ngAfterViewInit(): void {
    const icons = Object.values(skills).sort((a, b) => Math.random() - 0.5);
    const el = this.el.nativeElement;

    if (!el || !this.window) return;
    if (
      this.window.matchMedia &&
      this.window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    let width = 0,
      height = 0;

    const randomPosition = () => ({
      x: iconSize + Math.random() * (width - iconSize * 2),
      y: iconSize + Math.random() * (height - iconSize * 2),
    });

    const animateFirefly = (
      element: HTMLDivElement,
      duration: number,
      endPosition: Vector2,
      startDirection: Vector2,
      endDirection: Vector2
    ) => {
      const start = {
        x: Number(element.style.left.replace('px', '')),
        y: Number(element.style.top.replace('px', '')),
      };

      const curve = bezier(start, endPosition, startDirection, endDirection);

      animate({
        duration,
        draw: (progress) => {
          const position = curve(progress);
          element.style.left = `${position.x}px`;
          element.style.top = `${position.y}px`;
        },
        onComplete: () => {
          animateFirefly(
            element,
            duration,
            randomPosition(),
            endDirection,
            randomPosition()
          );
        },
      });
    };

    const resize = () => {
      if (!el || !this.window) return;

      width = el.offsetParent?.clientWidth ?? this.window.innerWidth;
      height = el.offsetParent?.clientHeight ?? this.window.innerHeight;

      if (!width || !height) return;

      const numFireflies = Math.min(
        icons.length,
        Math.round((width * height) / 50000)
      );

      if (el.childElementCount > numFireflies) {
        const toRemove = el.childElementCount - numFireflies;
        for (let i = 0; i < toRemove; i++) {
          el.children[el.childElementCount - 1].remove();
        }
      } else if (el.childElementCount < numFireflies) {
        const toAdd = numFireflies - el.childElementCount;
        for (let i = 0; i < toAdd; i++) {
          const firefly = document.createElement('div');
          firefly.className = 'firefly icon';
          el.appendChild(firefly);
          const startPosition = randomPosition();
          firefly.style.left = `${startPosition.x}px`;
          firefly.style.top = `${startPosition.y}px`;
          firefly.innerHTML = icons[el.childElementCount - 1];
          const duration = 20000 + Math.random() * 20000;
          animateFirefly(
            firefly,
            duration,
            randomPosition(),
            randomPosition(),
            randomPosition()
          );
        }
      }
    };

    resize();
    this.window.addEventListener('resize', resize);
  }
}
