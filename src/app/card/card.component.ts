import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Case, Skill, skills } from '../../data';
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
export class CardComponent implements OnInit, OnChanges {
  @Input() case!: Case;

  technologies: (Omit<Skill, 'icon'> & { icon: SafeHtml })[] = [];
  icon: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}
  ngOnChanges(): void {
    this.technologies = skills
      .filter((skill) => this.case.technologies.includes(skill.name))
      .map((skill) => ({
        ...skill,
        icon: this.sanitizer.bypassSecurityTrustHtml(skill.icon),
      }));
  }

  ngOnInit() {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(this.case.icon);
  }
}
