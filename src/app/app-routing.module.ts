import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeporteComponent } from './deporte/deporte.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},// cualquier url redirigir a Home
  {path:'deporte',component:DeporteComponent}, //redirigir al deporte
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
