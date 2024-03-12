import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { media } from '../../icons';
import { ScrollButtonComponent } from '../scroll-button/scroll-button.component';
import { CasesComponent } from '../cases/cases.component';
import { FirefliesComponent } from '../fireflies/fireflies.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CasesComponent, FirefliesComponent, ScrollButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  github: SafeHtml = media.github;
  linkedin: SafeHtml = media.linkedin;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.github = this.sanitizer.bypassSecurityTrustHtml(media.github);
    this.linkedin = this.sanitizer.bypassSecurityTrustHtml(media.linkedin);
  }
}
