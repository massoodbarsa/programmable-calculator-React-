const express = require('express');
const morgan = require('morgan');
const bodyparser= require('body-parser')
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose =require('mongoose')

const app = express();

// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
// app.use(express.static(__dirname+'public'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));


// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
// });

app.use(bodyparser.json())

Programs=require('../models/program')

//connect to mongoose
mongoose.connect('mongodb://localhost/programs')
var db = mongoose.connection

// app.get('/',(req,res)=>{
//   res.send('hello dayus shi goos')
// })



app.get('/api/program',(req,res)=>{
  Programs.getProgram((err,program)=>{
    if (err) {
      throw err
    }
    res.json(program)
  })

})

app.post('/api/program',(req,res)=>{


  console.log('req.body is :'+req.body);

  Programs.addProgram(req.body,(err,program)=>{
    if (err) {
      throw err
    }
    res.json(program)
  })

})


//update
app.put('/api/program/:_id',(req,res)=>{
  var id = req.params._id
  console.log(id);
  Programs.updateProgram(id,req.body,(err,program)=>{
    if (err) {
      throw err
    }
    res.json(program)
  })

})


//delete
app.delete('/api/program/:_id',(req,res)=>{
  var id = req.params._id
  console.log(id);
  Programs.deleteProgram(id,(err,program)=>{
    if (err) {
      throw err
    }
    res.json(program)
  })

})



module.exports = app;
