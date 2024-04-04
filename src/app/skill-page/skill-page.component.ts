import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { skills, SkillLevel } from '../../data';

@Component({
  selector: 'app-skill-page',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.css',
})
export class SkillPageComponent {
  skills = [...skills].sort(
    (a, b) =>
      SkillLevel[b.skillLevel] - SkillLevel[a.skillLevel] ||
      a.name.localeCompare(b.name)
  );
}
