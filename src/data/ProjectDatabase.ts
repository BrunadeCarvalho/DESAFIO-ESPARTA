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
}