import { Request, Response } from "express";
import { ProjectBusiness } from "../business/ProjectBusiness";
import { projectInputDTO } from "../model/projects/projectInputDTO";

export class ProjectController{
    creteProject = async(req: Request, res: Response)=>{
        try{
            const input: projectInputDTO={
                title: req.body.title,
                description: req.body.description
            };

            const projectBusiness = new ProjectBusiness()
            await projectBusiness.createProject(input)
            
            res.status(201).send(input)

        }catch(error:any){
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
}