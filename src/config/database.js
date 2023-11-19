require('dotenv').config()
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT, //defult:3306
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  module.exports =connection;
  