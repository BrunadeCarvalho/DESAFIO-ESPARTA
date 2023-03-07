import { Tasks } from "../model/tasks/tasks";
import { BaseDatabase } from "./BaseDatabase";
import { ProjectNotFound } from "../error/ProjectError";
import { TaskNotFound } from "../error/TasksError";

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

        }catch(error:any){
            if(error.errno == 1452){
                throw new ProjectNotFound
            }
        
            throw new Error(error.message)
        }
    }

    editTasks = async(tasks: Tasks)=>{
        const result = await TasksDatabase.connection
        .update({
            description: tasks.description,
            deadline: tasks.deadline,
            status: tasks.status
        })
        .where({id: tasks.id})
        .into("Tasks");

        if(result == 0){
            throw new TaskNotFound()
        }
    }

    deleteTasks = async(id:String)=>{
        try{
            const queryResult = await TasksDatabase.connection("Tasks")
            .delete()
            .where({id})

            if(queryResult == 0){
                throw new TaskNotFound()
            }
            
            return queryResult
        }catch(error:any){
            throw new Error(error.message)
        }
    }

    getTasks = async(id:string)=>{
        try{

            const queryResultProject = await TasksDatabase.connection.raw(
                `SELECT * from Projects where id = "${id}"`
            )
            
            if(queryResultProject[0].length < 1){
                throw new ProjectNotFound()
            }

            const queryResult = await TasksDatabase.connection.raw(
                `SELECT  p.name, t.id, t.description, t.deadline, t.status 
                from Tasks AS t 
                inner join Projects p on p.id = t.id_project 
                WHERE p.id = "${id}"`
            )

            if(queryResultProject[0] && queryResult[0].length < 1){
                return queryResultProject[0]
            }

            return queryResult[0]

        }catch(error:any){
            throw new Error(error.message)

        }
    }
}