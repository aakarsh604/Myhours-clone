const express = require("express");
const authRouter = require("./Routes/auth.routes");
const connnection = require("./database")

const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/", authRouter);

app.listen(8080, async()=>{
    try{
        await connnection;
        console.log("connected to database")
    }catch(err){
        console.log("Error occur",err);
    }
    console.log("server started at loacalhost:8080")
})