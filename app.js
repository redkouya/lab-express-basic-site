const express = require("express");
const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log("running middleware code");
  next();
});

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/photo-gallery.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
