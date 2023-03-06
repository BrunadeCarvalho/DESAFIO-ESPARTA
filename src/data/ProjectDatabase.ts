import { CustomError } from "../error/CustomError";
import { NoProjects, ProjectNotFound } from "../error/ProjectError";
import { Projects } from "../model/projects/projects";
import { BaseDatabase } from "./BaseDatabase";

export class ProjectDatabase extends BaseDatabase{
    createProject = async(project: Projects)=>{
        try{
            await ProjectDatabase.connection
            .insert({
                id: project.id,
                title: project.title,
                description: project.description
            }).into("Projects")

        }catch(erro:any){
            throw new Error(erro.message)
        }
    }

    getAllProject = async() =>{
        try{
            const queryResult = await ProjectDatabase.connection("Projects")
            .select("*")
            .orderBy('title', 'asc')

            if(queryResult.length <1){
                throw new NoProjects()
            }

            return queryResult
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

    getProject = async(id:string)=>{
        try{
            const queryResult = await ProjectDatabase.connection("Projects")
            .select("*")
            .where({id})

            if(queryResult.length <1){
                throw new ProjectNotFound()
            }
            return queryResult

        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

    editProject = async(project: Projects)=>{
        try{
            await ProjectDatabase.connection
            .update({
                title: project.title,
                description: project.description
            })
            .where({id: project.id})
            .into("Projects");
        }catch(erro:any){
            throw new CustomError(400, "Não foi possivel realizar as modificações.")

        }
    }
}