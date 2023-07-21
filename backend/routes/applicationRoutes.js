const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController')

router.get('/all', applicationController.getAllApplications);
router.post('/new', applicationController.postNewApplication);
router.put('/update', applicationController.updateApplication);

module.exports = router;