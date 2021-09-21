const express = require("express")
const router = express.Router()

const logincontroller = require('../controller/login_file')

router.get("/",logincontroller.login)


module.exports = router