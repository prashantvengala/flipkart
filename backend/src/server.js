const express = require("express");
const connect = require("./config/db");
const DefaultData = require("./default");
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes = require("./routes/routes");

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const start = async () => {
  await connect();
  app.listen(5000, async function () {
    console.log("Server launched at 5000...");
  });
};

DefaultData();

module.exports = start;
