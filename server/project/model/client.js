const mongoose = require("mongoose");


const clientSchema = mongoose.Schema({
    name : String,
    contactperson : String,
    email : String,
    phone:String,
    address:String,
    taxname:String,
    taxparcentage:Number,
    taxnumber:String,
})

const clientModel = mongoose.model("client",clientSchema)
module.exports = clientModel;