var express = require("express");
var mysql = require("mysql");
const path = require("path");
var app = express();
const fs = require("fs");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "admindatabase"
});
app.use(express.static(__dirname));
connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... nn");
    app.get("/About-Us-admin", function(req, res) {
      res.sendFile(__dirname + "/" + "About-Us-admin.html");
      console.log("runninh");
      connection.query("SELECT * from aboutus", function(err, result, fields) {
        connection.end();
        if (!err) {
          console.log(result[0].contact_no);
          //   const abt = document.getElementById("test");
          //   test.value = "mee";
        } else console.log("Error while performing Query.");
      });
    });

    app.listen(3000, () => {
      console.log("Port is running at 3000.");
    });
  } else {
    console.log("Error connecting database ... nn");
  }
});
