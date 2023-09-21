const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

// Obtener todos los empleados
router.get('/', employeeController.allEmployees);

// Obtener un empleado por su ID
router.get('/getEmployee/:id', employeeController.getEmployee);

// Crear un nuevo empleado
router.post('/newEmployee', employeeController.createEmployee);

// Actualizar un empleado por su ID
router.put('/updateEmployee/:id', employeeController.updateEmployee);

// Eliminar un empleado por su ID
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = router;
