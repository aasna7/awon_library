const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,)));

// app.get('/',(req, res) =>{
//     res.sendFile(path.join(__dirname, 'Aboutus.html'));
// })
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Forum Started on Port ${PORT}`));
//Create a function name render
