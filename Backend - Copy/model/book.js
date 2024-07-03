const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    rollno:{
        type:String,
        require:true
    },
    problem:{
        type:String,
        require:true
    },
})
module.exports = mongoose.model('EmergencyCases', bookSchema)