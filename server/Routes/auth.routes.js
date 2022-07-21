const {Router} = require("express");
const UserModel = require("../Models/User.auth")
const authRouter = Router();

authRouter.post("/signup", async(req,res)=>{
    console.log(req.body);
    const user = await new UserModel(req.body);
    user.save((err,success)=>{
        if(err){
            res.status(500).send({message: "error occurred"})
        }
        return res.status(201).send({message: "Signed up successfully", token : 12345})
    });
    
})

authRouter.post("/signin", async(req,res)=>{
    console.log(req.body);
    const checkuser = await UserModel.find(req.body).lean();
    if(checkuser.length>=1){
        let payload = {
            ...checkuser[0],
            token : 12345
        }
        res.send(payload);
    }
    else{
        res.send({message:"wrong credentials"})
    }
});

module.exports = authRouter;