import { Component } from '@angular/core';
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
export class HomePageComponent {}
