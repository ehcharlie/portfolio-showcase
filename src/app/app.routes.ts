import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {SkillsComponent} from './skills/skills.component';

export const routes: Routes = [
  {path: 'home', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
];
