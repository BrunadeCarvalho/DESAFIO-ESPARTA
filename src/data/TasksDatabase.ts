import { CustomError } from "../error/CustomError";
import { Tasks } from "../model/tasks/tasks";
import { BaseDatabase } from "./BaseDatabase";
import { ProjectNotFound } from "../error/ProjectError";

export class TasksDatabase extends BaseDatabase{
    createTasks =  async(tasks: Tasks)=>{
        try{
            await TasksDatabase.connection
            .insert({
                id: tasks.id,
                description: tasks.description,
                deadline: tasks.deadline,
                status: tasks.status,
                id_project: tasks.id_project
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
                id_project: tasks.id_project
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

    getTasks = async(id:string)=>{
        try{

            const queryResult = await TasksDatabase.connection.raw(
                `SELECT  p.title, t.id, t.description, t.deadline, t.status 
                from Tasks AS t 
                inner join Projects p on p.id = t.id_project 
                WHERE p.id = "${id}"`
            )

            if(queryResult.length <1){
                throw new ProjectNotFound()
            }

            return queryResult

        }catch(error:any){

        }
    }
}