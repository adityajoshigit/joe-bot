const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  applicationId: {
    type: String,
    required: [true, "applicationId Missing"],
  },
  companyId: {
    type: String,
    required: [true, "companyId Missing"],
  },
  dateTime: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: [true, "status Missing"],
  },
  userId: {
    type: String,
    required: [true, "userId Missing"],
  },
});

module.exports = mongoose.model("Application", applicationSchema);
