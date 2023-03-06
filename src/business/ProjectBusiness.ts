import { ProjectDatabase } from "../data/ProjectDatabase";
import { NotNullDescription, NotNullTitle } from "../error/ProjectError";
import { projectInputDTO } from "../model/projects/projectInputDTO";

export class ProjectBusiness{
    createProject = async(input: projectInputDTO)=>{
        try{
            const {title, description} = input;

            if(!title){
                throw new NotNullTitle()
            }else if(!description){
                throw new NotNullDescription()
            }


        }catch(error:any){
            throw new Error(error.message)
        }
    }
}