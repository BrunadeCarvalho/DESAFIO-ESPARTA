import express from "express"
import { ProjectController } from "../controller/ProjectController";

const projectController = new ProjectController();

export const projectRouter = express.Router();

projectRouter.post("/create", projectController.creteProject)
projectRouter.get("", projectController.getAllProject)
projectRouter.get("/:id", projectController.getProject)
projectRouter.put("/edit/:id", projectController.editProject)
