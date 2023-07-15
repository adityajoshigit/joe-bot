const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController')

router.get('/all', applicationController.get);

router.post('/new', applicationController.post);

router.put('/update', applicationController.put);

module.exports = router;