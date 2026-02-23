import express, { Request, Response } from "express" 
import dotenv from "dotenv";
import { GetUsersControllers } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

 app.get("/users", async (req: Request   , res: Response) => {
     const mongoGetUsersRepository = new MongoGetUsersRepository();

     const getUsersControllers = new GetUsersControllers(mongoGetUsersRepository);

     const {body, statusCode} = await getUsersControllers.handle();

     res.send(body).status(statusCode)
});

app.listen(port, () => console.log("Servidor na porta 8080 funcionando"))
