import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
        {
            path: '', component: EmployeeComponent
        },

        {
          path: 'manager', component: ManagerComponent
        },

        // {
        //   path: '',
        //   component: EmployeeComponent,
        //   children: [
        //       {
        //        path: 'manager',
        //        component: ManagerComponent,
        //       // loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
        // }]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
