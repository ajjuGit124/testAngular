import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';

// import { CompanyModule } from './company/company.module';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TableFormArrayComponent } from './table-form-array/table-form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PageNotFoundComponent,
    CounterComponent,
    CounterParentComponent,
    FormArrayComponent,
    TableFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // CompanyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
