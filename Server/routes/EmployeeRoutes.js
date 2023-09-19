const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.get('/', employeeController.allEmployees);
router.post('/newEmployee', employeeController.createEmployee);
router.put('/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = router;
