const mongoose = require("mongoose");
require("dotenv").config()

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password: String
})

const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel;