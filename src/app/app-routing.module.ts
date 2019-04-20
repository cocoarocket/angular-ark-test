import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AbonentsComponent } from './components/abonents/abonents.component';
import { HomeComponent } from './components/home/home.component';

import * as abonentsRoutes from './components/abonents/abonents-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'abonents', component: AbonentsComponent },
  { path: 'home', component: HomeComponent },
  ...abonentsRoutes.routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
