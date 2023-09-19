import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmplyeeService {

  private readonly url = 'http://localhost:3000/api/employees';

  constructor(private httpClient: HttpClient) { }

  GetAllEmployees()
  {
    return this.httpClient.get(this.url);
  }

  AddEmployee(employee:Employee)
  {
    return this.httpClient.post(this.url+'/newEmployee', employee);
  }

  DeleteEmployee(id:number)
  {
    return this.httpClient.delete(this.url+'/deleteEmployee/'+id)
  }
}
