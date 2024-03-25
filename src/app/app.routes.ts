import { Routes } from '@angular/router';
import { CasePageComponent } from './case-page/case-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillPageComponent } from './skill-page/skill-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'skills',
    component: SkillPageComponent,
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
