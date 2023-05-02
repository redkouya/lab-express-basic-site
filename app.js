const express = require("express");
const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log("running middleware code");
  next();
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
