const express=require('express')
const mongoose=require('mongoose')
const infoRoutes = require('./routes/info')
// const userRoutes = require('./routes/userroutes')
const bodyparser = require('body-parser')



//express app
const app =express()
require('dotenv').config()

//middlewares
app.use(express.json())
app.use(bodyparser.json())



//routes
app.use("/info",infoRoutes)
// app.use("/info", userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log("connected to db")
})

app.listen(process.env.PORT,()=>{
    console.log('running on',process.env.PORT)
})

