import { Component, Input, OnInit } from '@angular/core';
import { Case, cases } from '../../data';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { extra } from '../../icons';

const links = cases
  .map((item) => item.link)
  .filter((item) => item !== undefined);
const getAjesentLinks = (c: Case): CasePage => {
  const index = links.indexOf(c.link);
  const next = links[index + 1];
  const prev = links[index - 1];
  return { ...c, next, prev };
};

type CasePage = Case & { next?: string; prev?: string };

@Component({
  selector: 'app-case-page',
  standalone: true,
  imports: [],
  templateUrl: './case-page.component.html',
  styleUrl: './case-page.component.css',
})
export class CasePageComponent implements OnInit {
  data!: CasePage;

  @Input()
  set id(caseId: string) {
    const caseIndex = cases.findIndex((item) => item.link === `/${caseId}`);

    if (caseIndex === -1) {
      this.router.navigateByUrl('404', { skipLocationChange: true });
      return;
    }

    const indexMap = cases.reduce<Record<number, number>>(
      (acc, curr, index) => {
        if (curr.link) {
          acc[index] = index;
        }

        return acc;
      },
      {}
    );

    const caseItem = cases[caseIndex];
    this.data = getAjesentLinks(caseItem);
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  svg: SafeHtml = '';
  chevron_left: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.chevron_left = this.sanitizer.bypassSecurityTrustHtml(
      extra.chevron_left
    );
  }

  ngOnInit() {
    if (this.data.icon)
      this.svg = this.sanitizer.bypassSecurityTrustHtml(this.data.icon);
  }
}
