import { Component, Input, OnInit } from '@angular/core';
import { Case, cases } from '../../data';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-page',
  standalone: true,
  imports: [],
  templateUrl: './case-page.component.html',
  styleUrl: './case-page.component.css',
})
export class CasePageComponent implements OnInit {
  data!: Case;

  @Input()
  set id(caseId: string) {
    const caseItem = cases.find((item) => item.link === `/${caseId}`);

    if (!caseItem) {
      this.router.navigateByUrl('404', { skipLocationChange: true });
      return;
    }
    this.data = caseItem;
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  svg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit() {
    if (this.data.icon)
      this.svg = this.sanitizer.bypassSecurityTrustHtml(this.data.icon);
  }
}
