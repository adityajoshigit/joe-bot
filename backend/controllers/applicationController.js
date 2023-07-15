const asyncHandler = require('express-async-handler');
const Application = require('../models/applicationModel');

const get = asyncHandler(async (req, res) => {
  const allApplications = await Application.find();

  res.status(200).json({ applications: allApplications, success: true });
});

const post = asyncHandler(async (req, res) => {
  res.status(200).json({ applicationId: '1', dateTime: '', companyId: null, position: 'Software Developer', status: 0, success: true });
});

const put = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { applicationId, status } = req.body;
  res.status(200).json({ success: true });
});

module.exports = {
  get,
  post,
  put
};
