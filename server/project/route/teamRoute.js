const {Router} = require("express")

const {TeamMeamber,connection} = require("./../database/teamMember.js")

const Team =  Router()


Team.post("/teamMemberpost" , async(req,res)=>{
    const teamMeamber = new TeamMeamber({...req.body})
    res.setHeader("content-type", "application/json")
    await teamMeamber.save()
    res.send("teamMember are add")
})
 Team.get("/teamMemberdata",async(req,res)=>{
    res.setHeader("content-type","application/json")
    try {
  
        const data =  await TeamMeamber.find({})
        console.log(data)
         return res.status(200).json(data)
       }catch(error){
         res.status(404).json(error) 
       
     }

 })

 

Team.get('/:id',async(req,res)=>{
    res.setHeader("content-type","application/json")
         console.log(req.params.id)
    try {
  
        const data =  await TeamMeamber.findOne({_id:req.params.id})
        console.log(data)
         return res.status(200).json(data)
       }catch(error){
         res.status(404).json(error) 
       
     }
         
})
Team.put("/:id", async(req,res)=>{
    res.setHeader("content-type","application/json")
    const user = req.body
     console.log("1",user)
    const edditUser = new TeamMeamber(user)
    try {
         
          await TeamMeamber.updateOne({_id:req.params.id},edditUser)
          console.log("1",edditUser)
          return res.status(201).json(edditUser)
    } catch(error){
        res.status(409).json(error) 
    } 
})
 Team.delete("/:id", async(req,res)=>{
    res.setHeader("content-type","application/json")
     try {
         await TeamMeamber.deleteOne({_id:req.params.id})
         return res.status(200).json("delete success")
     } catch(error){
         res.status(409).json(error) 
     }
 })

module.exports =Team