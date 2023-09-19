import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { FormEditEmployeComponent } from './form-edit-employe/form-edit-employe.component';

const routes: Routes = [
  { 
    path: '', component: EmployeesComponent 
  },
  {
    path: 'createEmployee', component: FormEmployeeComponent
  },
  {
    path: 'editEmployee/:id', component: FormEditEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
