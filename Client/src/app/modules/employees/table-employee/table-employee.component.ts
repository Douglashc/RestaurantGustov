import { Component, OnInit } from '@angular/core';
import { ServiceEmplyeeService } from 'src/app/services/service-emplyee.service';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.scss']
})
export class TableEmployeeComponent implements OnInit {

  employeeList: Employee[];

  constructor(private serviceEmployeeService: ServiceEmplyeeService) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.ListAllEmployees();
  }

  ListAllEmployees()
  {
    this.serviceEmployeeService.GetAllEmployees().subscribe(
      res => {
        console.log(res);
        this.employeeList = <any>res;
      },
      error => console.log(error)
    );
  }

}
