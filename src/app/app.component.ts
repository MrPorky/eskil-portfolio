import { AfterViewInit, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';
import { media } from '../icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  window: Document['defaultView'] = null;

  github: SafeHtml = media.github;
  linkedin: SafeHtml = media.linkedin;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) doc: Document
  ) {
    this.github = this.sanitizer.bypassSecurityTrustHtml(media.github);
    this.linkedin = this.sanitizer.bypassSecurityTrustHtml(media.linkedin);

    this.window = doc.defaultView;

    if (
      this.window?.matchMedia &&
      this.window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ) {
      const root = doc.querySelector(':root');
      if (root && root instanceof HTMLElement)
        root.style.scrollBehavior = 'smooth';
    }
  }

  title = 'eskil-portfolio';
}
