import { Component } from '@angular/core';
import { HamburgerComponent } from '../hamburger/hamburger.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [HamburgerComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  open: boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
