import { Request, Response } from "express";
import { TasksBusiness } from "../business/TasksBusiness";
import { Tasks } from "../model/tasks/tasks"
import { TasksInputDTO } from "../model/tasks/tasksInputDTO";

export class TasksController{
    createTasks = async(req: Request, res: Response)=>{
        try{
            const input: TasksInputDTO={
                description: req.body.description,
                deadline: req.body.deadline,
                status: req.body.status,
                id_projects: req.body.id_projects
            };

            const tasksBusiness = new TasksBusiness()
            await tasksBusiness.createTasks(input)

            res.status(201).send(input)

        }catch(error:any){
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
}