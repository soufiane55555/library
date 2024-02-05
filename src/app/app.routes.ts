import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { HistoricComponent } from './historic/historic.component';
import { CulturalComponent } from './cultural/cultural.component';
import { ScienceComponent } from './science/science.component';

export const routes: Routes = [
   
    {path: 'sign-up', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent} ,
    {path: 'stories', component:StoriesComponent},
    {path: 'science', component:ScienceComponent},
    {path: 'cultural', component:CulturalComponent},
    {path: 'historic', component:HistoricComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' }
];
