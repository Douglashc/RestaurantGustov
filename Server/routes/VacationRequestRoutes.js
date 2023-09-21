const express = require('express');
const router = express.Router();
const vacationRequestController = require('../controllers/VacationRequestController');

// Ruta para obtener todas las solicitudes de vacaciones
router.get('/', vacationRequestController.allVacationRequest);

// Ruta para crear una nueva solicitud de vacaciones
router.post('/newVacationRequest', vacationRequestController.createVacationRequest);

// Ruta para eliminar una solicitud de vacaciones por su ID
router.delete('/deleteVacationRequest/:id', vacationRequestController.deleteVacationRequest);

module.exports = router;