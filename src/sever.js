
require('dotenv').config();
const express = require('express')//commonjs
const { request } = require('http')
const path = require('path')//commonjs
//import express
const configViewEngine=require('./config/viewEngine');
const webRoutes=require('./routes/web');
const connection =require("./config/database")


// simple query
// connection.query(
//   'SELECT * FROM Users u;',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//   }
// );
// console.log(">>> check env: ",process.env)

const app = express()
const port = process.env.port;
const host_name=process.env.host_name;

//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//config template engine
configViewEngine(app)

app.use('',webRoutes);

// route of template engine
app.listen(port,host_name, () => {
  console.log(`Example app listening on port ${port}`)
})
