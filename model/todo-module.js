//Get model
const mongoose = require('mongoose')
//setting schema what kind of data type you are sending it over
const newSchema = new mongoose.Schema({
    todoName:{
        type:String,
        required:true
    },

    todoDescription:{
        type:String,
        required:true
    }
})  //means what kind of data we are going to send to db  
module.exports = mongoose.model('todo-list',newSchema)