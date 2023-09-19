import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { TableEmployeeComponent } from './table-employee/table-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    FormEmployeeComponent,
    TableEmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ]
})
export class EmployeesModule { }
