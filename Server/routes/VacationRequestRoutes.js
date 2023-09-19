const express = require('express');
const router = express.Router();
const vacationRequestController = require('../controllers/VacationRequestController');

router.get('/', vacationRequestController.allVacationRequest);
router.get('/getVacationRequest/:id', vacationRequestController.getVacationRequest);
router.post('/newVacationRequest', vacationRequestController.createVacationRequest);
router.put('/updateVacationRequest/:id', vacationRequestController.updateVacationRequest);
router.delete('/deleteVacationRequest/:id', vacationRequestController.deleteVacationRequest);

module.exports = router;