const express = require('express');
const router = express.Router();
const vacationRequestController = require('../controllers/VacationRequestController');

router.get('/', vacationRequestController.allVacationRequest);
router.post('/newVacationRequest', vacationRequestController.createVacationRequest);
router.delete('/deleteVacationRequest/:id', vacationRequestController.deleteVacationRequest);

module.exports = router;