import { Routes } from '@angular/router';
import { CasePageComponent } from './case-page/case-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: ':id',
    component: CasePageComponent,
  },
];
