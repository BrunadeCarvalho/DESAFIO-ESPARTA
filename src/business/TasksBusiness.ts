import { TasksDatabase } from "../data/TasksDatabase";
import { NotNullDescription } from "../error/ProjectError";
import { NotNullDeadline, NotNullIdProjects, NotNullStatus } from "../error/TasksError";
import { Tasks } from "../model/tasks/tasks";
import { TasksInputDTO } from "../model/tasks/tasksInputDTO";
import { generateId } from "../services/idGenerator";

export class TasksBusiness{
    createTasks = async(input: TasksInputDTO)=>{
        try{
            const {description, deadline, status, id_projects} = input;

            if(!deadline){
                throw new NotNullDeadline()
            }else if(!description){
                throw new NotNullDescription()
            }else if(!status){
                throw new NotNullStatus()
            }else if (!id_projects){
                throw new NotNullIdProjects()
            }


            const generatedId: string = generateId()

            const tasks: Tasks={
                id: generatedId,
                description,
                deadline,
                status,
                id_projects
            }

            const tasksDatabase = new TasksDatabase()
            await tasksDatabase.createTasks(tasks)

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}