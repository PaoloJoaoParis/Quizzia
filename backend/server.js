import sequelize from "./src/config/database.js";
import express from "express"
import { PlayerRoute, ApiRoute,DifficultyRoute} from "./src/routes/index.js";
import {errorHandler} from "./src/middlewares/errorHandler.js"
import cors from "cors";

const app = express()
const port = 3000


app.use(express.static("public"));
app.use(express.json());

app.use(cors({    //pour que que le back puisse acceder au front
  origin: "http://localhost:5173"
}));

await sequelize.sync({ force: true });
console.log('Tables synchées');


app.use("/",ApiRoute.router);
app.use("/api/v1/players",PlayerRoute.router)

app.use("/api/v1/difficulty",DifficultyRoute.router)

app.use(errorHandler)



app.listen(port, () => {
    console.log(`server lauched at http://localhost:${port}`)
})


app.get("/api/test", (req, res) => {
  res.json({ message: "Backend OK" });
});