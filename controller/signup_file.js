const connection = require("../database_connection/config")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


module.exports.register = async(req,res)=>{
    const salt =10;

    const hashaPassword = await bcrypt.hash(req.body.password,salt)

    let userData={
        username : req.body.username,
        password : hashaPassword,
        email :req.body.email
    }

    connection.query("SELECT email FROM loginsignup WHERE email ='"+req.body.email+"'",function(err,result,field){
        if(result.length ==0){
            var sql = "INSERT INTO loginsignup SET ?";
            let query = connection.query(sql,userData,(err,result)=>{
            if (err) throw err;
            console.log("signup successfully")

            })
            const data = {email:result.email}
            const createToken = jwt.sign(data,"pragati",{expiresIn:"1h"});
            console.log(createToken)
            return res.status(200).json({message:"signupsuccessfully" , token:createToken});

        }else{
            console.log("user already exits")
            res.send("user already exits")
        }
    })
}