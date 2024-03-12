import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../data';
import { NgTemplateOutlet } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() case!: Case & { left: boolean };

  icon: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(this.case.icon);
  }
}
