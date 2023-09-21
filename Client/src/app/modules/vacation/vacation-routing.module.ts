import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacationComponent } from './vacation.component';
import { FormVacationComponent } from './form-vacation/form-vacation.component';

const routes: Routes = [
  { 
    path: '', component: VacationComponent 
  },
  {
    path: 'createVacationRequest', component: FormVacationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationRoutingModule { }
