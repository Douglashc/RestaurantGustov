const db = require('../models/Conexion');
const VacationRequest = db.vacationRequest;
const Employee = db.employee;

const moment = require('moment');

exports.allVacationRequest = async (req, res) => {
    try {
        await updateStatusRequestVacation();
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

exports.createVacationRequest = async (req, res) => {
    try {
        const { startDateVacation, EmployeeId } = req.body;

        const employee = await Employee.findByPk(EmployeeId);

        const endDateVacation = calculateEndDate(startDateVacation, employee.vacationDays);
        const status = determineStatus(startDateVacation, endDateVacation);

        const vacationRequest = await VacationRequest.create({ startDateVacation, endDateVacation, status, EmployeeId });
        res.json(vacationRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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

function calculateEndDate(startDate, vacationDays) {
    return moment(startDate).add(vacationDays, 'days').format('YYYY-MM-DD');
}

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

const updateStatusRequestVacation = async () => {
    try {
        const currentDate = moment().format('YYYY-MM-DD');

        await VacationRequest.update( { status: 'Activo' },
            {
                where: { startDateVacation: currentDate }
            }
        );

        await VacationRequest.update({ status: 'Expirado' },
            {
                where: { endDateVacation: currentDate }
            }
        );
        
    } catch (error) {
        console.error('Error al actualizar estados:', error);
    }
};

