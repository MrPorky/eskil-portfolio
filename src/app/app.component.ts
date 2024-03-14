import { AfterViewInit, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';
import icons from '../icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  window: Document['defaultView'] = null;

  github: SafeHtml = icons.github;
  linkedin: SafeHtml = icons.linkedin;
  eg: SafeHtml = icons.eg;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) doc: Document
  ) {
    this.github = this.sanitizer.bypassSecurityTrustHtml(icons.github);
    this.linkedin = this.sanitizer.bypassSecurityTrustHtml(icons.linkedin);
    this.eg = this.sanitizer.bypassSecurityTrustHtml(icons.eg);

    this.window = doc.defaultView;

    const root = doc.querySelector(':root');
    if (!root) return;

    if (root instanceof HTMLElement && !Number.isNaN(root.clientHeight / 100)) {
      root.style.setProperty('--vh', `${root.clientHeight / 100}px`);
    }

    if (
      this.window?.matchMedia &&
      this.window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ) {
      if (root && root instanceof HTMLElement)
        root.style.scrollBehavior = 'smooth';
    }
  }

  title = 'eskil-portfolio';
}
