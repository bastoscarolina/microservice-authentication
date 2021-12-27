import express, { NextFunction, Request, Response } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//Config da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Config de rotas
app.use(usersRoute);
app.use(statusRoute);

app.get('/status', (req: Request ,res: Response,next:NextFunction)=> {
    res.status(200).send({foo:'hello'});
});

//Inicialização do servidor
app.listen(3000, ()=> {
    console.log("App executando na porta 3000")
})

//-r tsconfig-paths/register