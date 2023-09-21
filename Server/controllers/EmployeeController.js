const db = require('../models/Conexion');
const Employee = db.employee;
const moment = require('moment')

// Devuelve todos los empleados
exports.allEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({});
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Devuelve un empleado por su ID
exports.getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if(!employee){
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.json(employee);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

// Crea un nuevo empleado
exports.createEmployee = async (req, res) => {
    try {
        const { names, surNames, cellPhone, startDate } = req.body;
        
        // Calcula los días de vacaciones basados en la fecha de inicio
        const vacationDays = calculateVacationDays(startDate);

        //Registro de los datos del empleado
        const employee = await Employee.create({ names, surNames, cellPhone, startDate, vacationDays });

        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualiza un empleado
exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { names, surNames, cellPhone, startDate } = req.body;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        // Calcula los días de vacaciones basados en la fecha de inicio
        const vacationDays = calculateVacationDays(startDate);

        // Actualiza los datos del empleado
        await employee.update({ names, surNames, cellPhone, startDate, vacationDays });

        res.json({ message: 'Empleado actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Elimina un empleado
exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        await employee.destroy();
        res.json({ message: 'Empleado eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para calcular los días de vacaciones segun la fecha de inicio
function calculateVacationDays(startDate) {
    const startDateMoment = moment(startDate);
    const currentDate = moment();
    const yearsWorked = currentDate.diff(startDateMoment, 'years');

    if (yearsWorked >= 1 && yearsWorked <= 5) {
        return 15;
    } else if (yearsWorked >= 6 && yearsWorked <= 10) {
        return 20;
    } else if (yearsWorked >= 11) {
        return 30;
    } else {
        return 0;
    }
}
