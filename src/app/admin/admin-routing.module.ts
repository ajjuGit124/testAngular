import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcountComponent } from './acount/acount.component';
import { HrsectionComponent } from './hrsection/hrsection.component';


const routes: Routes = [
  {
    path: '', component: AcountComponent
  },

  {
    path: 'hrssection', component: HrsectionComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
