import { Routes } from '@angular/router';
import { CasePageComponent } from './case-page/case-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: ':id',
    component: CasePageComponent,
  },
];
