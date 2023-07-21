const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController')

const {
  getAllApplications,
  postNewApplication,
  updateApplication,
} = {
  ...applicationController
};

router.get('/all', getAllApplications);
router.post('/new', postNewApplication);
router.put('/update', updateApplication);

module.exports = router;