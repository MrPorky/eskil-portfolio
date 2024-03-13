import { AfterViewInit, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  window: Document['defaultView'] = null;

  constructor(@Inject(DOCUMENT) doc: Document) {
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
