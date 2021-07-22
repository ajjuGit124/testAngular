import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { EmployeeComponent } from './company/employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TableFormArrayComponent } from './table-form-array/table-form-array.component';

const routes: Routes = [

  {
    path:'', redirectTo:'parent', pathMatch:'full'
  }, 

  // {
  //   path:'company',
  //   loadChildren: './company/company.module#CompanyModule'
  // },  

  {
    path: 'company',
    children: [
        {
         path: '',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
  }]},

  {
    path: 'admin',
    children: [
        {
         path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }]},

  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //       {
  //        path: '',
  //       loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  // }]},

  
 

  {
    path:'parent', component:ParentComponent
  },


  // {
  //   path:'employee', component:EmployeeComponent
  // },


  {
    path:'formArray', component:FormArrayComponent
  },
  
  {
    path:'tableFormArray', component:TableFormArrayComponent
  },

  {
    path:'**', component:PageNotFoundComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
