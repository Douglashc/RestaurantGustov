import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacationComponent } from './vacation.component';
import { FormVacationComponent } from './form-vacation/form-vacation.component';
import { FormEditVacationRequestComponent } from './form-edit-vacation-request/form-edit-vacation-request.component';

const routes: Routes = [
  { 
    path: '', component: VacationComponent 
  },
  {
    path: 'createVacationRequest', component: FormVacationComponent
  },
  {
    path: 'editVacationRequest', component: FormEditVacationRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationRoutingModule { }
