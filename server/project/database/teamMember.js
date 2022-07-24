const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
require("dotenv").config()
const mongodb_url = process.env.MOGODB_URL
const connection = mongoose.connect(mongodb_url);

const TeamMeamberSchem = new Schema({
  name : String ,
  email :String ,
  note: String ,
  role : String , 
  laborRate:Number ,
  billableRate:Number ,


})

const TeamMeamber = model("teamMeamber",TeamMeamberSchem)

module.exports= {TeamMeamber,connection}