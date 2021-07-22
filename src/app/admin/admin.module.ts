import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AcountComponent } from './acount/acount.component';
import { HrsectionComponent } from './hrsection/hrsection.component';


@NgModule({
  declarations: [AcountComponent, HrsectionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})

export class AdminModule {

constructor(){
  console.log("Admin Loadedddddddddddddddddd");
}
  
 }


