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
module.exports =Team