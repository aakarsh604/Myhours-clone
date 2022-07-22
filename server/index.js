
const fs = require("fs");
const mongodb = require("mongodb");
const cors = require("cors")
const  Team = require("./project/route/teamRoute.js")
const app = express();
const clientRouter = require("./project/route/clientsRoute")
const authRouter = require("./Routes/auth.routes");
const connnection = require("./database")
const PORT = process.env.PORT || 4040
const {connection} = require("./project/database/teamMember")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 app.use(cors())
//   app.use("/",clientRouter)
  app.use("/client",clientRouter)
 app.use("/teamMember",Team)
//  app.use("/teamMemberdata",Team)

 app.listen(4040, async () => {
 try {
    await connection;
    console.log("connection to db");
  } catch {
    console.log("failled");
  }
  console.log("server starting");
});

