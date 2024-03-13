import { Component } from '@angular/core';
import { RainComponent } from '../rain/rain.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RainComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
