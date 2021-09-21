
const connection = require('../database_connection/config')
const jwt = require('jsonwebtoken')



module.exports.login =(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    connection.query("SELECT *FROM loginsignup WHERE email = '"+ email +"'",function(err,result,field){
        console.log(result)

        if(err){
            res.send({
                "failed":"error"
            })
        }else{
            if(result.length > 0){
                res.send("login successfully")
                console.log("login successfully")
            }
        }




    })








}