import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacationRequestEmployee } from 'src/app/interfaces/VacationRequestEmployee';
import { VacationRequestService } from 'src/app/services/vacation-request.service';

@Component({
  selector: 'app-table-vacation',
  templateUrl: './table-vacation.component.html',
  styleUrls: ['./table-vacation.component.scss']
})
export class TableVacationComponent implements OnInit {

  vacationRequestList: VacationRequestEmployee[];

  constructor(private vacationRequestService: VacationRequestService, private router: Router) { 
    this.vacationRequestList = []
  }

  ngOnInit(): void {
    this.ListAllVacationRequest();
  }

  ListAllVacationRequest()
  {
    this.vacationRequestService.GetAllVacationRequests().subscribe(
      res => {
        this.vacationRequestList = <VacationRequestEmployee[]>res;
      },
      error => console.log(error)
    );
  }

  OnDeleteVacationRequest(id: number)
  {
    this.vacationRequestService.DeleteVacationRequest(id).subscribe(
      res => {
        alert("Vacacion eliminado");
        this.ListAllVacationRequest();
      },
      error => console.log(error)
    )
  }

}
