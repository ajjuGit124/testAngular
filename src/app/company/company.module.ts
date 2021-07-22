import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';



@NgModule({
  declarations: [EmployeeComponent, ManagerComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]

})

export class CompanyModule {

constructor(){
  console.log("company Module");
}
  
 }
