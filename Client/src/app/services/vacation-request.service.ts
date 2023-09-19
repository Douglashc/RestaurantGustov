import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}


