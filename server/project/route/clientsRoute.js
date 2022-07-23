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
clientRouter.get('/:id',async(req,res)=>{
    res.setHeader("content-type","application/json")
         console.log(req.params.id)
    try {
  
        const data =  await clientModel.findOne({_id:req.params.id})
        console.log(data)
         return res.status(200).json(data)
       }catch(error){
         res.status(404).json(error) 
       
     }
         
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
clientRouter.put("/:id", async(req,res)=>{
    res.setHeader("content-type","application/json")
    const user = req.body
     console.log("1",user)
    const edditUser = new clientModel(user)
    try {
         
          await User.updateOne({_id:req.params.id},edditUser)
          console.log("1",edditUser)
          return res.status(201).json(edditUser)
    } catch(error){
        res.status(409).json(error) 
    } 
})
 routclientRouter.delete("/:id", async(req,res)=>{
    res.setHeader("content-type","application/json")
     try {
         await clientModel.deleteOne({_id:req.params.id})
         return res.status(200).json("delete success")
     } catch(error){
         res.status(409).json(error) 
     }
 })


module.exports = clientRouter