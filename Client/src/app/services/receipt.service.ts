import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor() { }

  generateVacationReceipt(employee: Employee = {}, startDate?: Date, endDate?: Date) {
    const doc = new jsPDF();
    doc.text('Recibo de Vacaciones', 10, 10);
    doc.text(`Nombre del Empleado: ${employee.names} ${employee.surNames}`, 10, 20);
    doc.text(`Fecha de Inicio: ${startDate}`, 10, 30);
    doc.text(`Fecha de Fin: ${endDate}`, 10, 40);
    doc.text(`Dias Totales de Vacacion: ${employee.vacationDays}`, 10, 50);
    
    return doc;
  }
}
