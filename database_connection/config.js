const mysql = require("mysql")

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pragati@12",
    database:"loginsignup"

})

connection.connect((err,result)=>{
    if(err) throw err
        console.log("database connected!!!!")
})


    var sql = "create table if not exists loginsignup(username varchar(50) NOT NUll,email varchar(50)NOT NULL UNIQUE,password varchar(1000)Not NULL)";
    connection.query(sql,(err,result)=>{
        if(err) throw err
                console.log("Table has created")
    })

module.exports=connection