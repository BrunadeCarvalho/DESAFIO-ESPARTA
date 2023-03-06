import { CustomError } from "../error/CustomError";
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

    editTasks = async(tasks: Tasks)=>{
        try{
            await TasksDatabase.connection
            .update({
                description: tasks.description,
                deadline: tasks.deadline,
                status: tasks.status,
                id_projects: tasks.id_projects
            })
            .where({id: tasks.id})
            .into("Tasks");
        }catch(erro:any){
            throw new CustomError(400, "Não foi possivel realizar as modificações.")

        }
    }

    deleteTasks = async(id:String)=>{
        try{
            const queryResult = await TasksDatabase.connection("Tasks")
            .delete()
            .where({id})

            if(queryResult){
                return "Tarefa deletada com sucesso"
            }
                return "Tarefa não localizada, verifique se o id está correto."
        }catch(error:any){
            throw new CustomError(error.status, error.message)
        }
    }
}