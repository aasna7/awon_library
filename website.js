const express = require('express');
const mysql=require('mysql');
const website=express();
var path=require("path");
const bodyParser=require('body-parser');
website.use(bodyParser.urlencoded({ extended: false }));
website.use(bodyParser.json());

// website.use(express.static(__dirname+'Public'))
//or / if you want to make it main page 
website.use('/', express.static('public'))
//create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    //password:'123456'
   database:'nodemysql'
});

//first ma yo file aaya ko  '/' or root request lai public folder ma vaya ko index.html file send garai ra xa.
// Tara this is not good practise.
// yadi static content haru dekhaunu xa vnya express ko static use garnu parxa.
// website.get('/',function(_req,res){
//     res.sendFile(path.join(__dirname+'/Public/index.html'));
//   });

  website.post('/membership',function(req,res){

    var name=req.body.Fullname;
    var contacts=req.body.Contacts;
    var address=req.body.Address;
    var email=req.body.Email;
    var date=req.body.Date
    var category=req.body.Category;
    var gender=req.body.Gender;
    res.redirect('/');
    

  //db.connect(function(err) {
    //if (err) throw err;
    var sql = "INSERT INTO membership (Fullname, Contacts, Address, Email, Date_of_birth, Category, Gender) VALUES ('"+name+"','"+contacts+"','"+address+"','"+email+"','"+date+"','"+category+"','"+gender+"')";
    db.query(sql, function (err) {
      if (err) throw err; 
      console.log("1 record inserted");
      //window.alert("You will be notified about your approval");
       res.end();
    });
    });
  

  //})


//Create db
//website.get('/createdb',(req, res)=>{
    // let sql='CREATE DATABASE nodemysql';
    // db.query(sql,(err, result)=>{
    //     if(err) throw err;
    //     console.log(result);
//         res.send('Database created...');
//     });
// });

// //create table
// website.get('/createpoststable',(req, res)=>{
//     let sql='CREATE TABLE MEMBERSHIP( Fullname VARCHAR(255), Contacts VARCHAR(255), Address VARCHAR(255), Email VARCHAR(255), Category VARCHAR(255), Gender VARCHAR(255), PRIMARY KEY(Email) )';
//     db.query(sql,(err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Membership table created...');
// });

//});
website.listen('3000',() =>{
    console.log('Server started on port 3000');
});


