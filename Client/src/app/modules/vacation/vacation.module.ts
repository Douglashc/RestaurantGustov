import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VacationRoutingModule } from './vacation-routing.module';
import { VacationComponent } from './vacation.component';
import { FormVacationComponent } from './form-vacation/form-vacation.component';
import { TableVacationComponent } from './table-vacation/table-vacation.component';
import { SearchVacationComponent } from './search-vacation/search-vacation.component';
import { FormEditVacationRequestComponent } from './form-edit-vacation-request/form-edit-vacation-request.component';


@NgModule({
  declarations: [
    VacationComponent,
    FormVacationComponent,
    TableVacationComponent,
    SearchVacationComponent,
    FormEditVacationRequestComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
    FormsModule
  ]
})
export class VacationModule { }
