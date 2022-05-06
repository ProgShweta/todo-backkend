//Import Express
const express = require('express')
const apirouter = require('../todo-backendd/routes/api-routes')
const mongoose = require('mongoose')
//intialize the Application 
const app = express()

const port = 8080
app.use(express.json())
//setup server port
app.use('/',apirouter)

const url = "mongodb+srv://Shweta123:12345@cluster0.kilpu.mongodb.net/kelltonEcommerce?retryWrites=true&w=majority"

mongoose.connect(url , {useNewUrlParser:true})
.then(()=>{
    console.log("database connected")
})
.catch(err => console.log(err))
//in order to launch the ecommerce backend app
app.listen(port, () =>{
    console.log(`database is running on http://localhost:${port}`)
})



