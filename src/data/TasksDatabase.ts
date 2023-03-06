import { Tasks } from "../model/tasks/tasks";
import { BaseDatabase } from "./BaseDatabase";

export class TasksDatabase extends BaseDatabase{
    createTasks =  async(tasks: Tasks)=>{
        try{
            await TasksDatabase.connection
            .insert({
                id: tasks.id,
                description: tasks.description,
                deadline: tasks.deadline,
                status: tasks.status,
                id_projects: tasks.id_projects
            }).into("Tasks")

        }catch(erro:any){
            throw new Error(erro.message)
        }
    }
}