const {Router} = require("express")
const clientModel = require("../model/client.js")
const clientRouter = Router();




clientRouter.post("/client",async(req,res)=>{

    const client = new clientModel({...req.body})
    res.setHeader("content-type", "application/json")
    await  client.save()
    res.send("teamMember are add")

})

module.exports = clientRouter