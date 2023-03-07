import express from "express"
import { TasksController } from "../controller/TasksController";

const tasksController = new TasksController()

export const tasksRouter = express.Router()

tasksRouter.post("", tasksController.createTasks)
tasksRouter.put("/:id", tasksController.editTasks)
tasksRouter.delete("/:id", tasksController.deleteTasks)
tasksRouter.get("/:id", tasksController.getTasks)