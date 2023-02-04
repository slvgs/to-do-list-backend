import { TasksDB } from "../type";
import { BaseDataBase } from "./BaseDataBase";





export class TaskDatabase extends BaseDataBase {
    public static TABLE_TASKS = "tasks"

    public async findTasks(){

        const tasksDB : TasksDB[] = await BaseDataBase
        .connection(TaskDatabase.TABLE_TASKS)

        return tasksDB

    }

    public async findTasksId(id: string | undefined){

        const [taskDb]: TasksDB[] | undefined[] = await BaseDataBase
        .connection(TaskDatabase.TABLE_TASKS)
        .where({id})

        return taskDb


    }


    public async insertTasks(newTask: TasksDB){
        await BaseDataBase
        .connection(TaskDatabase.TABLE_TASKS)
        .insert(newTask)
    }


    






}
