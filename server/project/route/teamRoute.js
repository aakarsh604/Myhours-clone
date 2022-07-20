const {Router} = require("express")

const {TeamMeamber,connection} = require("./../database/teamMember.js")

const Team =  Router()


Team.post("/teamMember" , async(req,res)=>{
    const teamMeamber = new TeamMeamber({...req.body})
    res.setHeader("content-type", "application/json")
    await teamMeamber.save()
    res.send("teamMember are add")
})

module.exports =Team