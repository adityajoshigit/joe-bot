const asyncHandler = require("express-async-handler");
const Application = require("../models/applicationModel");

const getAllApplications = asyncHandler(async (req, res) => {
  const allApplications = await Application.find();

  res.status(200).json({ applications: allApplications, success: true });
});

const postNewApplication = asyncHandler(async (req, res) => {
  if (req.body.companyName && req.body.status) {
  } else {
    res
      .status(500)
      .json({ message: "companyName or status or ", success: false });
  }
});

const updateApplication = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { applicationId, status } = req.body;
  res.status(200).json({ success: true });
});

module.exports = {
  getAllApplications,
  postNewApplication,
  updateApplication,
};
