import { CustomError } from "../error/CustomError";
import { ProjectNotFound } from "../error/ProjectError";
import { TaskNotFound } from "../error/TasksError";
import { Projects } from "../model/projects/projects";
import { BaseDatabase } from "./BaseDatabase";

export class ProjectDatabase extends BaseDatabase{
    createProject = async(project: Projects)=>{
        try{
            await ProjectDatabase.connection
            .insert({
                id: project.id,
                name: project.name,
                description: project.description
            }).into("Projects")
        }catch(error:any){
            throw new Error(error.message)
        }
    }

    getAllProject = async() =>{
        try{
            const queryResult = await ProjectDatabase.connection("Projects")
            .select("*")
            .orderBy('name', 'asc')

            if(queryResult.length <1){
                throw new ProjectNotFound()
            }

            return queryResult
        }catch(error: any){
            throw new Error(error.message)
        }
    }

    getProject = async(id:string)=>{

        const queryResult = await ProjectDatabase.connection("Projects")
        .select("*")
        .where({id})

        if(queryResult.length <1){
            throw new ProjectNotFound()
        }
        return queryResult
    }

    editProject = async(project: Projects)=>{
        try{
            const result = await ProjectDatabase.connection
            .update({
                name: project.name,
                description: project.description
            })
            .where({id: project.id})
            .into("Projects");

            if(result == 0){
                throw new ProjectNotFound()
            }

            return result
        }catch(error:any){
            throw new Error(error.message)

        }
    }

    deleteProject = async(id:String)=>{
        const queryResult = await ProjectDatabase.connection("Projects")
        .delete()
        .where({id})

        if(queryResult == 0){
            throw new ProjectNotFound()
        }
        return queryResult
    }
}