const express = require("express")
const{getinfo,getsingleinfo,updateinfo,createinfo}=require('../Controller/api.js')
const{loginuser,registeruser}=require('../Controller/usercontroller.js')
const router = express.Router()

//get all info
router.get("/getall",getinfo)
//get single info
router.get('/gettarget/:id',getsingleinfo)
//update a info
router.put('/put', updateinfo)
//create a info
router.post('/create',createinfo)
//create a signup
router.post('/register',registeruser)
//create a login
router.post('/login',loginuser)


module.exports = router

