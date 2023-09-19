import { Employee } from "./Employee";

export interface VacationRequest{
    id?: number;
    startDateVacation?: Date;
    endDateVacation?: Date;
    status?: 'Activo' | 'Expirado' | 'Pendiente';
}