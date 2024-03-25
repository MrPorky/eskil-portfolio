import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() title!: string;

  i!: SafeHtml;
  @Input() set icon(icon: string) {
    this.i = this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  get icon(): SafeHtml {
    return this.i;
  }

  open: boolean = false;
  triggerId: string = crypto.randomUUID();
  panelId: string = crypto.randomUUID();

  constructor(private sanitizer: DomSanitizer) {}

  toggle() {
    this.open = !this.open;
  }
}
