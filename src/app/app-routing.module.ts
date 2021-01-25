import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { TemplateAComponent } from './create-template/custom-templates/template-a/template-a.component';
import { CustomTemplatesComponent } from './create-template/custom-templates/custom-templates.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard',  pathMatch:'full' },
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'create-template' , component: CreateTemplateComponent},
  {path: 'template' , component: CustomTemplatesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
