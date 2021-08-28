const express = require("express");
const connect = require("./config/db");
const DefaultData = require("./default");

const app = express();

const start = async () => {
  await connect();
  app.listen(5000, async function () {
    console.log("Server launched at 5000...");
  });
};

DefaultData();

module.exports = start;
