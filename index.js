const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const memb = require("./membershipadmin.js");
const app = express();
app.use(express.static(__dirname));
app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/" + "index.html");
  // res.render("index", { page: "Home", menuId: "home" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
