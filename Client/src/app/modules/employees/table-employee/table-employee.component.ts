import { Component, OnInit } from '@angular/core';
import { ServiceEmplyeeService } from 'src/app/services/service-emplyee.service';
import { Employee } from 'src/app/interfaces/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.scss']
})
export class TableEmployeeComponent implements OnInit {

  employeeList: Employee[];

  constructor(private serviceEmployeeService: ServiceEmplyeeService, private router: Router) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.ListAllEmployees();
  }

  ListAllEmployees()
  {
    this.serviceEmployeeService.GetAllEmployees().subscribe(
      res => {
        this.employeeList = <Employee[]>res;
      },
      error => console.log(error)
    );
  }

  EditEmployee(id:number)
  {
    this.router.navigate(['/employees/editEmployee/'+id]);
  }

  OnDelete(id: number)
  {
    this.serviceEmployeeService.DeleteEmployee(id).subscribe(
      res => {
        alert("Empleado eliminado");
        this.ListAllEmployees();
      },
      error => console.log(error)
    )
  }
}
