const db = require('../models/Conexion');
const Employee = db.employee;

exports.allEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({});
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

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

exports.createEmployee = async (req, res) => {
    try {
        const { names, surNames, cellPhone, startDate } = req.body;
        const employee = await Employee.create({ names, surNames, cellPhone,startDate });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { names, surNames, cellPhone, startDate } = req.body;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        await employee.update({ names, surNames, cellPhone, startDate });
        res.json({ message: 'Empleado actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
