import { Request, Response, NextFunction, Router } from "express";
import {StatusCodes} from "http-status-codes";

const  usersRoute = Router();

usersRoute.get('/users',(req:Request, res:Response, next:NextFunction) =>{
    const users = [{username: "Carolina"}];
    res.status(StatusCodes.OK).send({users})
});

//para dizer que um pedaço da url vai ser dinamica, coloca o : antes o do nome da variavel
usersRoute.get('/users/:uuid',(req:Request<{uuid:string}>,res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid
    //bancoDeDados.getUserByUUID(uuid)
    res.status(StatusCodes.OK).send({uuid})
});

usersRoute.post('/users',(req: Request, res:Response, next: NextFunction)=> {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request, res:Response, next:NextFunction )=>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});

});

usersRoute.delete('/users/:uuid',(req:Request,res:Response,next:NextFunction)=>{
    res.sendStatus(StatusCodes.OK)
});

export default usersRoute;