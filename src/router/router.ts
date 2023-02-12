import express from "express";
import { taskController } from "../controller/TasksController";
import { userController } from "../controller/userController";
import { User } from "../models/User";



export const userRouter = express.Router();


const UserController = new userController


userRouter.get("/", UserController.getUsers);
userRouter.post("/", UserController.createUser);


export const taskRouter = express.Router();

const TaskController = new taskController
taskRouter.get("/", TaskController.getTasks)
