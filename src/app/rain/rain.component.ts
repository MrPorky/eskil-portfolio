import { Component } from '@angular/core';

@Component({
  selector: 'app-rain',
  standalone: true,
  imports: [],
  templateUrl: './rain.component.html',
  styleUrl: './rain.component.css',
})
export class RainComponent {
  drops: [string, string][] = [];
  backDrops: [string, string][] = [];

  constructor() {
    let increment = 0;

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      //random number between 5 and 2
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      this.drops.push([
        `left: ${increment}%; bottom: ${
          randoFiver + randoFiver - 1 + 100
        }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.8${randoHundo}s;`,
        `animation-delay: 0.${randoHundo}s; animation-duration: 0.8${randoHundo}s;`,
      ]);

      this.backDrops.push([
        `right: ${increment}%; bottom: ${
          randoFiver + randoFiver - 1 + 100
        }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;`,
        `animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;`,
      ]);
    }
  }
}
