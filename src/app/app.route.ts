import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'job', component: JobComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
