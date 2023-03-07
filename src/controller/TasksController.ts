import { Request, Response } from "express";
import { TasksBusiness } from "../business/TasksBusiness";
import { TasksDatabase } from "../data/TasksDatabase";
import { Tasks } from "../model/tasks/tasks"
import { TasksInputDTO } from "../model/tasks/tasksInputDTO";

export class TasksController{
    createTasks = async(req: Request, res: Response)=>{
        try{
            const input: TasksInputDTO={
                description: req.body.description,
                deadline: req.body.deadline,
                status: req.body.status,
                id_project: req.body.id_project
            };

            const tasksBusiness = new TasksBusiness()
            const response = await tasksBusiness.createTasks(input)

            return res.status(201).send(response)

        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }

     public editTasks = async(req: Request, res: Response)=>{
        try{
            const input: Tasks={
                id: req.params.id,
                description: req.body.description,
                deadline: req.body.deadline,
                status: req.body.status
            };

            const tasksBusiness = new TasksBusiness()
            await tasksBusiness.editTasks(input)

            return res.status(200).send(input)
        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }

    public deleteTasks = async(req: Request, res: Response)=>{
        try{
            const {id}= req.params

            const tasksDatabase = new TasksDatabase()
            await tasksDatabase.deleteTasks(id)

            return res.status(204).send()
        }catch(error:any){
            return res.status(404).send({message: error.message})
        }
    }

    public getTasks = async(req: Request, res: Response)=>{
        try{
            const {id} = req.params

            const tasksDatabase = new TasksDatabase()
            const tasks = await tasksDatabase.getTasks(id)
            
            const response = {
                projectName: tasks[0].name,
                projectId: id,
                tasks: []
            }

            if(tasks[0].status){
                response.tasks = tasks.map((task: Tasks) => {
                    delete task.name
                    return task
                })
            }

            return res.status(200).send(response)
        }catch(error:any){
            return res.status(404).send({message: error.message})
        }
    }
}