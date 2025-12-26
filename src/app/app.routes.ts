import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';

export const routes: Routes = [
  {path: 'home', component: AboutComponent},
  {path: 'about', component: SkillsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
