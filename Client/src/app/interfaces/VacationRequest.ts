export interface VacationRequest{
    id?: number;
    startDateVacation?: Date;
    endDateVacation?: Date;
    status?: 'Activo' | 'Expirado' | 'Pendiente';
    EmployeeId?: number;
}