import { ProjectDatabase } from "../data/ProjectDatabase";
import { NotNullDescription, NotNullName } from "../error/ProjectError";
import { projectInputDTO } from "../model/projects/projectInputDTO";
import { Projects } from "../model/projects/projects";
import { generateId } from "../services/idGenerator";

export class ProjectBusiness{
    createProject = async(input: projectInputDTO)=>{
        try{
            const {name, description} = input;

            if(!name){
                throw new NotNullName()
            }else if(!description){
                throw new NotNullDescription()
            }

            const generatedId: string = generateId()

            const project: Projects={
                id: generatedId,
                name,
                description
            }


            const projectDatabase = new ProjectDatabase
            await projectDatabase.createProject(project)

            return project

        }catch(error:any){
            throw new Error(error.message)
        }
    }

    editProject = async(input: Projects)=>{
        try{
            const {name, description, id} = input

            if(!name){
                throw new NotNullName()
            }else if(!description){
                throw new NotNullDescription()
            }

            const edit: Projects ={
                id,
                name,
                description
            }

            const projectDatabase = new ProjectDatabase()
            await projectDatabase.editProject(edit)

            return edit

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}