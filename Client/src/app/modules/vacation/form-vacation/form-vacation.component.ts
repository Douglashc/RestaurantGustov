import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { ServiceEmplyeeService } from 'src/app/services/service-emplyee.service';
import { VacationRequest } from 'src/app/interfaces/VacationRequest';
import { VacationRequestService } from 'src/app/services/vacation-request.service';

@Component({
  selector: 'app-form-vacation',
  templateUrl: './form-vacation.component.html',
  styleUrls: ['./form-vacation.component.scss']
})
export class FormVacationComponent implements OnInit {

  vacationRequest: VacationRequest = {};
  employeeList: Employee[];

  constructor(private serviceEmployeeService: ServiceEmplyeeService, private router: Router, private vacationRequestService: VacationRequestService) { 
    this.vacationRequest = {
      id: 0,
      startDateVacation: new Date,
      endDateVacation: new Date,
      status: 'Activo',
      EmployeeId: 0
    };
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.ListAllEmployees();
  }

  CreateNewVacationRequest()
  {
    if (this.vacationRequest.EmployeeId && this.vacationRequest.startDateVacation && this.vacationRequest.endDateVacation) {
      
      delete this.vacationRequest.id;

      this.vacationRequestService.AddVacationRequest(this.vacationRequest).subscribe(
        res => {
          alert("Solicitud de vacacion registrada");
          this.router.navigate(['vacation']);
        },
        error => console.log(error)
      );
    }else{
      alert("Por favor, complete todos los campos obligatorios.");
    }
  }

  ListAllEmployees()
  {
    this.serviceEmployeeService.GetAllEmployees().subscribe(
      res => {
        this.employeeList = <Employee[]>res;
        if (this.employeeList.length > 0) {
          this.vacationRequest.EmployeeId = this.employeeList[0].id;
        }
      },
      error => console.log(error)
    );
  }

}
