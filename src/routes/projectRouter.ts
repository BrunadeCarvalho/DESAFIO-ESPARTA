import express from "express"
import { ProjectController } from "../controller/ProjectController";

const projectController = new ProjectController();

export const projectRouter = express.Router();

projectRouter.post("", projectController.creteProject)
projectRouter.get("", projectController.getAllProject)
projectRouter.get("/:id", projectController.getProject)
projectRouter.put("/:id", projectController.editProject)
projectRouter.delete("/:id", projectController.deleteProject)
