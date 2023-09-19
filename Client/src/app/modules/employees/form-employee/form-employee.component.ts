import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  employee: Employee = {
    id: 0,
    names: '',
    surNames: '',
    startDate: new Date
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}
