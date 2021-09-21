const connection = require('../database_connection/config')
const jwt = require('jsonwebtoken')


module.exports.register =( req,res)=>{
    console.log("HIIIIII");

    let userdata ={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    console.log(userdata)
    connection.query("SELECT email FROM loginsignup WHERE email ='"+req.body.email+"'",function(err,result,field){
        console.log("hiiii")
        if(result.length == 0){
            var sql = "INSERT INTO loginsignup SET ?";
            let query = connection.query(sql,userdata,(err,result)=>{
                if(err) throw err;

                console.log(result,"signup successfully!!!")
            })

            //const data = {email:result.email}
            const createToken =jwt.sign({email:req.body.email},"pragati");
            console.log(createToken)

            return res.send(200).json({message:"signup successfully",token:createToken})




        }else{
            console.log("user already exits")
            res.send("user is already exits")
        }
    })
}
