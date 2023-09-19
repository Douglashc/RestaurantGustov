import { Employee } from "./Employee";
import { VacationRequest } from "./VacationRequest";

export interface VacationRequestEmployee extends VacationRequest{
    Employee: Employee
}