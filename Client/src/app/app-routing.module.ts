import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'employees', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule) 
  }, 
  { 
    path: 'vacation', loadChildren: () => import('./modules/vacation/vacation.module').then(m => m.VacationModule) 
  },
  {
    path: '', redirectTo: '/employees', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/employees', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
