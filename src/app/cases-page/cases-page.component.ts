import { Component } from '@angular/core';
import { CasesComponent } from '../cases/cases.component';

@Component({
  selector: 'app-cases-page',
  standalone: true,
  imports: [CasesComponent],
  templateUrl: './cases-page.component.html',
  styleUrl: './cases-page.component.css',
})
export class CasesPageComponent {}
