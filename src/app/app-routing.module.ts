import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KendoInlineComponent } from './kendo-inline/kendo-inline.component';
import { EmployeeComponent } from './employees/employee/employee.component';

const routes: Routes = [
  { path: 'InlineKendo', component: KendoInlineComponent },
  { path: 'EmployeeComp', component: EmployeeComponent },
  { path: '', redirectTo:'InlineKendo', pathMatch:'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
