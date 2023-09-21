import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/interfaces/Employee';
import { ServiceEmplyeeService } from 'src/app/services/service-emplyee.service';
import { VacationRequest } from 'src/app/interfaces/VacationRequest';
import { VacationRequestService } from 'src/app/services/vacation-request.service';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-form-vacation',
  templateUrl: './form-vacation.component.html',
  styleUrls: ['./form-vacation.component.scss']
})
export class FormVacationComponent implements OnInit {

  vacationRequest: VacationRequest = {};
  employeeList: Employee[];

  constructor(private serviceEmployeeService: ServiceEmplyeeService, 
              private router: Router, 
              private vacationRequestService: VacationRequestService,
              private receiptService: ReceiptService) 
  {
    this.vacationRequest = {
      id: 0,
      startDateVacation: new Date,
      EmployeeId: 0
    };
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.ListAllEmployees();
  }

  CreateNewVacationRequest() {
    if (this.isFormValid()) {
      this.createNewRequest();
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
    }
  }

  private isFormValid(): boolean {
    return !!this.vacationRequest.EmployeeId && !!this.vacationRequest.startDateVacation;
  }

  private createNewRequest() {
    delete this.vacationRequest.id;
  
    this.vacationRequestService.AddVacationRequest(this.vacationRequest).subscribe(
      (res: VacationRequest) => {
        alert("Registro de solicitud de vacacion exitoso");
        this.handleSuccessfulRequest(res);
      },
      error => console.log(error)
    );
  }
   
  private handleSuccessfulRequest(resVacationRequest: VacationRequest) {
  
    let businessName = this.employeeList.find(empleado => empleado.id === Number(resVacationRequest.EmployeeId));
  
    const receipt = this.receiptService.generateVacationReceipt(
      businessName,
      resVacationRequest.startDateVacation,
      resVacationRequest.endDateVacation
    );
    
    receipt.save(`recibo_vacacion_${businessName?.names} ${businessName?.surNames}.pdf`)
  
    this.router.navigate(['vacation']);
  }

  ListAllEmployees() {
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

  getMinDate(): string {
    const today = new Date();
    const month = today.getMonth() + 1; // Agregamos 1 porque los meses empiezan desde 0
    const day = today.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();
    return `${today.getFullYear()}-${formattedMonth}-${formattedDay}`;
  }

}
