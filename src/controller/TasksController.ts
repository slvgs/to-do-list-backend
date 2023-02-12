import { Request, Response } from "express"
import { TaskDatabase } from "../database/TaskDatabase"
import { Task } from "../models/Task"
import { TasksDB } from "../type"





export class taskController{

    public getTasks = async(req:Request, res: Response) => {


        try {

            const taskDatabase = new TaskDatabase()
            const tasksDB = await taskDatabase.findTasks()

            res.status(200).send(tasksDB)
            
        } catch (error) {

            
            if(req.statusCode === 200){
                res.status(500)
            }
            
        }

    }

    public createTask = async (req: Request, res: Response) => {


        try {

            const {id, title, description} = req.body

            if (typeof id !== "string") {
                res.status(400)
                throw new Error("'id' deve ser string")
            }
    
            if (typeof title !== "string") {
                res.status(400)
                throw new Error("'title' deve ser string")
            }
    
            if (typeof description !== "string") {
                res.status(400)
                throw new Error("'description' deve ser string")
            }
    
            const taskDatabase = new TaskDatabase()
            const taskDBExist = await taskDatabase.findTasksId(id)

            if (taskDBExist){
                res.status(400)
                throw new Error("'id' já existe")
            }

            const newTask = new Task(
                id,
                title,
                description,
                new Date().toISOString()

            ) 

            const newTaskDB: TasksDB = {
                id: newTask.getId(),
                title: newTask.getTitle(),
                description: newTask.getDescription(),
                create_at: newTask.getCreateAt()
            }

            await taskDatabase.insertTasks(newTaskDB)

            res.status(201).send(newTask)
            



            
        } catch (error) {

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


}