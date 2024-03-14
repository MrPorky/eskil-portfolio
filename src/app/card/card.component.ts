import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  host: {
    role: 'listitem',
  },
})
export class CardComponent implements OnInit {
  @Input() case!: Case;

  icon: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(this.case.icon);
  }
}
