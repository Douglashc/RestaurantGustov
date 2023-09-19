import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';

const routes: Routes = [
  { 
    path: '', component: EmployeesComponent 
  },
  {
    path: 'createEmployee', component: FormEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
