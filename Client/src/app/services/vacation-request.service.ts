import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacationRequest } from '../interfaces/VacationRequest';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {

  private readonly url = 'http://localhost:3000/api/vacationRequests';

  constructor(private httpClient: HttpClient) { }

  GetAllVacationRequests()
  {
    return this.httpClient.get(this.url);
  }

  AddVacationRequest(vacationRequest:VacationRequest)
  {
    return this.httpClient.post(this.url+'/newVacationRequest', vacationRequest);
  }

  DeleteVacationRequest(id:number)
  {
    return this.httpClient.delete(this.url+'/deleteVacationRequest/'+id)
  }
}


