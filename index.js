const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname));
app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
