import { Request, Response } from "express";
import { ProjectBusiness } from "../business/ProjectBusiness";
import { ProjectDatabase } from "../data/ProjectDatabase";
import { CustomError } from "../error/CustomError";
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

    public getAllProject = async(req: Request, res:Response)=>{
        try{
            const projectDatabase = new ProjectDatabase()
            const getAllProjects = await projectDatabase.getAllProject()

            res.status(200).send(getAllProjects)
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public getProject = async(req: Request, res:Response)=>{
        try{
            const {id} = req.params

            const projectDatabase = new ProjectDatabase()
            const getProject = await projectDatabase.getProject(id)

            res.status(200).send(getProject[0])
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}