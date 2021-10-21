const mysql = require("mysql")
require('dotenv').config()


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pragati@12",
  database: "loginsignup"
});

connection.connect((err,result) =>{
  if(err) throw err
  console.log("Database connected")
  
})
var sql = "create table if not exists loginsignup(username varchar(50) NOT NULL,email varchar(50)NOT NULL UNIQUE, password varchar(1000)NOT NULL)";
connection.query(sql, (err, result) => {
    if (err) throw err
    console.log("table created")
  
  
});

module.exports = connection;