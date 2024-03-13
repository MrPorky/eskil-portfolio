import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { cases } from '../../data';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css',
})
export class CasesComponent {
  cases = cases;
}
