
const express = require("express")
const router = express.Router()
const signupcontroll=require('../controller/signup_file')

router.post("/",signupcontroll.register)


module.exports = router

