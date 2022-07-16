const express = require("express");
const PORT = process.env.PORT || 3000;
var cors = require("cors");
var app = express();

app.use(cors());
app.set("view engine", "ejs");
//const images = require("images");

const images = require("./images");

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./app.js");
app.options("*", cors());
app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname, "./views");
app.set("views", viewsPath);

app.get("", (req, res) => {
  res.set(
    "Content-Security-Policy",
    "default-src https://*; script-src https://*; style-src https://*; font-src 'self'; img-src * data: blob: 'unsafe-inline'; frame-src *;"
  );
  res.render("index", { images: images });
});

//app.get("/about", (req, res) => {
//  res.render("about", { imagesArray: images });
//});

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
