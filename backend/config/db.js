const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    console.log("Connecting to mongodb...");
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connection successful with ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDB;
