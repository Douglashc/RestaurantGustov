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
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text('Recibo de Vacaciones', 105, 20, { align: 'center' });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    
    // Contenido del recibo
    doc.text(`Nombre del Empleado: ${employee.names} ${employee.surNames}`, 20, 40);
    doc.text(`Fecha de Inicio: ${startDate}`, 20, 50);
    doc.text(`Fecha de Fin: ${endDate}`, 20, 60);
    doc.text(`Días Totales de Vacación: ${employee.vacationDays}`, 20, 70);

    doc.rect(10, 10, 190, 100); 
    doc.setFontSize(10);
    doc.text('Restaurante Gustov', 105, 100, { align: 'center' });
    
    return doc;
  }
}
