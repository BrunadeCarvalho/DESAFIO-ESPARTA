import { Request, Response } from "express";
import { projectInputDTO } from "../model/projects/projectInputDTO";

export class ProjectController{
    creteProject = async(req: Request, res: Response)=>{
        try{
            const input: projectInputDTO={
                title: req.body.title,
                description: req.body.description
            };

            res.status(201).send(input)

        }catch(error:any){
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
}