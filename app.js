const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, CI/CD!. Done with Deployment to Render!");
});
module.exports = app;
