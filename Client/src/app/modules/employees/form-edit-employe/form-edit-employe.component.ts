import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { ServiceEmplyeeService } from 'src/app/services/service-emplyee.service';

@Component({
  selector: 'app-form-edit-employe',
  templateUrl: './form-edit-employe.component.html',
  styleUrls: ['./form-edit-employe.component.scss']
})
export class FormEditEmployeComponent implements OnInit {

  employee: Employee = {};
  
  constructor(private router: Router, private activedRouted: ActivatedRoute, private serviceEmployee: ServiceEmplyeeService) 
  { 
    this.employee = {
      id: 0,
      names: '',
      surNames: '',
      startDate: new Date
    };
  }

  ngOnInit(): void {
    this.DataEmployee();
  }

  DataEmployee()
  {
    const id_employee = this.activedRouted.snapshot.params['id'];
    
    if(id_employee){
      this.serviceEmployee.GetEmployee(id_employee).subscribe(
        res => {
          this.employee = res;
        },
        error => console.log(error)
      )
    }
  }

  UpdateDataEmployee()
  {
    if (this.employee.names && this.employee.surNames && this.employee.startDate) {
      
      const id_employee = this.activedRouted.snapshot.params['id'];
      
      this.serviceEmployee.UpdateEmploye(this.employee, id_employee).subscribe(
        res => {
          alert("Datos del Empleado actualizado con exito");
          this.router.navigate(['employees']);
        },
        error => console.log(error)
      );
    }else{
      alert("Por favor, complete todos los campos obligatorios.");
    }
  }
}
