
import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { UsersDB } from "../type"



export class userController{

    public getUsers = async (req:Request, res: Response) => {

        try {
            const q = req.query.q as string | undefined

            const userDataBase = new UserDatabase()
            const usersDB = await userDataBase.findUsers(q)

            const users : User[] = usersDB.map((userDB) => new User(

                userDB.id,
                userDB.email,
                userDB.name,
                userDB.password,
                userDB.created_at

            ))

            res.status(200).send(users)
            
            
        } catch (error) {

            

            if(req.statusCode === 200){
                res.status(500)
            }

            
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            

            const { id, name, email, password } = req.body
    
            if (typeof id !== "string") {
                res.status(400)
                throw new Error("'id' deve ser string")
            }
    
            if (typeof name !== "string") {
                res.status(400)
                throw new Error("'name' deve ser string")
            }
    
            if (typeof email !== "string") {
                res.status(400)
                throw new Error("'email' deve ser string")
            }
    
            if (typeof password !== "string") {
                res.status(400)
                throw new Error("'password' deve ser string")
            }

            const userDataBase = new UserDatabase()
            const userDBExists = await userDataBase.findUserId(id)

            if(userDBExists){
                res.status(400)
                throw new Error("'id' já existe")
            }

            const newUser = new User(
                id,
                name,
                email,
                password,
                new Date().toISOString()

            )

            const newUserDB: UsersDB = {
                id: newUser.getId(),
                name: newUser.getName(),
                email: newUser.getEmail(),
                password: newUser.getPassword(),
                created_at: newUser.getCreateAt()
            }

            await userDataBase.insertUsers(newUserDB)

            res.status(201).send(newUser)




        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
            
        }
    }


    //fazer o endpoint delete 
}