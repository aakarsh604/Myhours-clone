const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const mongodb_url = process.env.MOGODB_URL 
const connection = mongoose.connect("mongodb+srv://sagar:sagar123@cluster0.dn7hj5y.mongodb.net/myhoursproject?retryWrites=true&w=majority");

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