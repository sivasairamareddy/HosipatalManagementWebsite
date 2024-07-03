const mongoose = require('mongoose')
const Schema = mongoose.Schema
const medSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    Quantity:{
        type:String,
        require:true
    },
})
module.exports = mongoose.model('MedicineData', medSchema)