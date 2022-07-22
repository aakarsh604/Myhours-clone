const {Router} = require("express")
const clientModel = require("../model/client.js")
const clientRouter = Router();




clientRouter.post("/clientpost",async(req,res)=>{

    const client = new clientModel({...req.body})
    res.setHeader("content-type", "application/json")
    console.log(req.body)
    await  client.save()
    res.send(" client are add")

})
clientRouter.get("/clientdata", async(req,res)=>{
    res.setHeader("content-type","application/json")
    try {
  
        const data =  await clientModel.find({})
        console.log(data)
         return res.status(200).json(data)
       }catch(error){
         res.status(404).json(error) 
       
     }
})

module.exports = clientRouter