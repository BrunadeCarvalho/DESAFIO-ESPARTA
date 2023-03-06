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
                id_projects: req.body.id_projects
            };

            const tasksBusiness = new TasksBusiness()
            await tasksBusiness.createTasks(input)

            res.status(201).send(input)

        }catch(error:any){
            res.status(400).send(error.message || error.sqlMessage)
        }
    }

     public editTasks = async(req: Request, res: Response)=>{
        try{
            const input: Tasks={
                id: req.params.id,
                description: req.body.description,
                deadline: req.body.deadline,
                status: req.body.status,
                id_projects: req.body.id_projects
            };

            const tasksBusiness = new TasksBusiness()
            await tasksBusiness.editTasks(input)

            res.status(201).send({message: "Tarefa editada com sucesso!"})
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }

    public deleteTasks = async(req: Request, res: Response)=>{
        try{
            const {id}= req.params

            const tasksDatabase = new TasksDatabase()
            const deleteTasks = await tasksDatabase.deleteTasks(id)

            res.status(200).send(deleteTasks)
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }

    public getTasks = async(req: Request, res: Response)=>{
        try{

            const {id} = req.params

            const tasksDatabase = new TasksDatabase()
            const tasks = await tasksDatabase.getTasks(id)

            res.status(200).send(tasks[0])
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }
}