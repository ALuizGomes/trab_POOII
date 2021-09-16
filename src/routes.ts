import { Request, Response } from "express"
import { createUser } from "./services/CreateUser"

export function helloWorld(req: Request,res: Response) {

    const user = createUser({
        name: 'André Gomes',
        email: 'aluizgomes@terra.com.br',
        password: '3004'
    })


    return res.json({message : "Hello World"})
    
}