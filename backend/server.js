const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const applicationRoutes = require("./routes/applicationRoutes");
const connectToDB = require("./config/db");

connectToDB();

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/api/applications", applicationRoutes);

app.route("/");

app.listen(port, () => {
  console.log(`Server Started On Port ${port}!`);
});
