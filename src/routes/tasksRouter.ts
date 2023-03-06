import express from "express"
import { TasksController } from "../controller/TasksController";

const tasksController = new TasksController()

export const tasksRouter = express.Router()

tasksRouter.post("/create", tasksController.createTasks)
tasksRouter.put("/edit/:id", tasksController.editTasks)
tasksRouter.delete("/delete/:id", tasksController.deleteTasks)