import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { skills, SkillLevel } from '../../data';

@Component({
  selector: 'app-skill-page',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.css',
})
export class SkillPageComponent implements AfterViewInit {
  skills = [...skills].sort(
    (a, b) =>
      SkillLevel[b.skillLevel] - SkillLevel[a.skillLevel] ||
      a.name.localeCompare(b.name)
  );

  doc: Document;

  constructor(@Inject(DOCUMENT) doc: Document) {
    this.doc = doc;
  }

  ngAfterViewInit(): void {
    const hash = this.doc.location.hash.substring(1);
    const element = this.doc.getElementById(hash);

    if (!element) return;

    element.scrollIntoView();
    element.querySelector('button')?.click();
  }
}
