import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VacationRoutingModule } from './vacation-routing.module';
import { VacationComponent } from './vacation.component';
import { FormVacationComponent } from './form-vacation/form-vacation.component';
import { TableVacationComponent } from './table-vacation/table-vacation.component';

@NgModule({
  declarations: [
    VacationComponent,
    FormVacationComponent,
    TableVacationComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
    FormsModule
  ]
})
export class VacationModule { }
