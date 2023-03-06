import { ProjectDatabase } from "../data/ProjectDatabase";
import { NotNullDescription, NotNullTitle } from "../error/ProjectError";
import { projectInputDTO } from "../model/projects/projectInputDTO";
import { Projects } from "../model/projects/projects";
import { generateId } from "../services/idGenerator";

export class ProjectBusiness{
    createProject = async(input: projectInputDTO)=>{
        try{
            const {title, description} = input;

            if(!title){
                throw new NotNullTitle()
            }else if(!description){
                throw new NotNullDescription()
            }

            const generatedId: string = generateId()

            const project: Projects={
                id: generatedId,
                title,
                description
            }

            const projectDatabase = new ProjectDatabase
            await projectDatabase.createProject(project)

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}