import { Request, Response } from "express";
import { ProjectBusiness } from "../business/ProjectBusiness";
import { ProjectDatabase } from "../data/ProjectDatabase";
import { CustomError } from "../error/CustomError";
import { projectInputDTO } from "../model/projects/projectInputDTO";
import { Projects } from "../model/projects/projects";

export class ProjectController{
    creteProject = async(req: Request, res: Response)=>{
        try{
            const input: projectInputDTO={
                name: req.body.name,
                description: req.body.description
            };

            const projectBusiness = new ProjectBusiness()
            const response = await projectBusiness.createProject(input)
            
            res.status(201).send(response)

        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
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
            res.status(error.statusCode).send({message: error.message})
        }
    }

    public editProject = async(req: Request, res: Response)=>{
        try{
            const input: Projects={
                id: req.params.id,
                name: req.body.name,
                description: req.body.description
            };

            const projectBusiness = new ProjectBusiness()
            const response = await projectBusiness.editProject(input)

            return res.status(200).send(response)
        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }

    public deleteProject = async(req: Request, res: Response)=>{
        try{
            const {id} = req.params

            const projectDatabase = new ProjectDatabase()
            await projectDatabase.deleteProject(id)

            return res.status(204).send()
        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }
}