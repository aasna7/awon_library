console.log("jvnf");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "admindatabase"
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function memberlist(mem) {
  const div1 = document.querySelector("list-member");
  var para = document.createElement("p");
  var name = document.createElement("label");
  var approve = document.createElement("button");
  var decline = document.createElement("button");
  name.textContent = mem.Fullname;
  approve.textContent = "Approve";
  decline.textContent = "Decline";
  para.append(name);
  para.append(approve);
  para.append(decline);
  div1.append(para);
}
console.log("up");
connection.connect(function(err) {
  if (!err) {
    console.log("Connected to database");
    connection.query("SELECT * from membership", function(err, result, fields) {
      connection.end();
      for (var i = 0; i <= result.length; i++) {
        memberlist(result)[i];
      }
    });
  }
});
