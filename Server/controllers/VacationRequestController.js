const db = require('../models/Conexion');
const VacationRequest = db.vacationRequest;
const Employee = db.employee;

exports.allVacationRequest = async (req, res) => {
    try {
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

exports.getVacationRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const vacationRequest = await VacationRequest.findByPk(id, {
            include: [{
                model: Employee,
                attributes: ['names', 'surNames', 'cellPhone', 'startDate']
            }]
        });
        if(!vacationRequest){
            return res.status(404).json({ error: 'Solicitud de vacacion no encontrada' });
        }
        res.json(vacationRequest);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.createVacationRequest = async (req, res) => {
    try {
        const { startDateVacation, endDateVacation, status, EmployeeId } = req.body;
        const vacationRequest = await VacationRequest.create({ startDateVacation, endDateVacation, status, EmployeeId });
        res.json(vacationRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateVacationRequest = async (req, res) => {
    const { id } = req.params;
    const { startDateVacation, endDateVacation, status, EmployeeId } = req.body;
    try {
        const vacationRequest = await VacationRequest.findByPk(id);
        if (!vacationRequest) {
            return res.status(404).json({ error: 'Solicitud de vacacion no encontrado' });
        }
        await vacationRequest.update({ startDateVacation, endDateVacation, status, EmployeeId });
        res.json({ message: 'Datos de vacacion actualizado' });
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
