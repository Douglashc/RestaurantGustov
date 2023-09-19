import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';
import { ServiceEmplyeeService } from 'src/app/services/service-emplyee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  employee: Employee = {};

  constructor(private serviceEmployee: ServiceEmplyeeService, private router: Router) {
    this.employee = {
      id: 0,
      names: '',
      surNames: '',
      startDate: new Date
    };
  }

  ngOnInit(): void {
  }

  CreateNewEmployee() {
    if (this.employee.names && this.employee.surNames && this.employee.startDate) {
      
      delete this.employee.id;

      this.serviceEmployee.AddEmployee(this.employee).subscribe(
        res => {
          alert("Empleado registrado con exito");
          this.router.navigate(['employees']);
        },
        error => console.log(error)
      );
    }else{
      alert("Por favor, complete todos los campos obligatorios.");
    }
  }

}
