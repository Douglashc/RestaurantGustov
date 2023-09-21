const db = require('../models/Conexion');
const VacationRequest = db.vacationRequest;
const Employee = db.employee;

const moment = require('moment');

// Obtener todas las solicitudes de vacaciones
exports.allVacationRequest = async (req, res) => {
    try {
        // Actualizar los estados de las solicitudes de vacaciones
        await updateStatusRequestVacation();
        
        // Obtener todas las solicitudes de vacaciones con información de empleados
        const vacationRequests = await VacationRequest.findAll({
            include: [{
                model: Employee,
                attributes: ['names', 'surNames', 'cellPhone', 'startDate']
            }]
        });
        res.json(vacationRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva solicitud de vacaciones
exports.createVacationRequest = async (req, res) => {
    try {
        const { startDateVacation, EmployeeId } = req.body;

        // Obtener el empleado asociado a la solicitud
        const employee = await Employee.findByPk(EmployeeId);

        // Calcular la fecha de finalización de las vacacion
        const endDateVacation = calculateEndDate(startDateVacation, employee.vacationDays);

        // Determinar el estado de la solicitud de vacaciones
        const status = determineStatus(startDateVacation, endDateVacation);

        // Crear la nueva solicitud de vacaciones
        const vacationRequest = await VacationRequest.create({ startDateVacation, endDateVacation, status, EmployeeId });
        res.json(vacationRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una solicitud de vacaciones
exports.deleteVacationRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const vacationRequest = await VacationRequest.findByPk(id);
        if (!vacationRequest) {
            return res.status(404).json({ error: 'Solicitud de vacacion no encontrado' });
        }
        await vacationRequest.destroy();
        res.json({ message: 'Solicitud de vacacion eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Calcular la fecha de finalización de las vacaciones
function calculateEndDate(startDate, vacationDays) {
    return moment(startDate).add(vacationDays, 'days').format('YYYY-MM-DD');
}

// Determinar el estado de la solicitud de vacaciones
function determineStatus(startDate, endDate) {
    const currentDate = moment().format('YYYY-MM-DD');

    if (moment(endDate).isBefore(currentDate)) {
        return 'Expirado';
    } else if (moment(startDate).isAfter(currentDate)) {
        return 'Pendiente';
    } else {
        return 'Activo';
    }
}

// Actualizar automáticamente los estados de las solicitudes de vacaciones
const updateStatusRequestVacation = async () => {
    try {
        const currentDate = moment().format('YYYY-MM-DD');

        // Actualizar solicitudes de vacaciones con estado 'Activo' si la fecha de inicio es igual a la fecha actual
        await VacationRequest.update( { status: 'Activo' },
            {
                where: { startDateVacation: currentDate }
            }
        );

        // Actualizar solicitudes de vacaciones con estado 'Expirado' si la fecha de finalización es igual a la fecha actual
        await VacationRequest.update({ status: 'Expirado' },
            {
                where: { endDateVacation: currentDate }
            }
        );
        
    } catch (error) {
        console.error('Error al actualizar estados:', error);
    }
};
