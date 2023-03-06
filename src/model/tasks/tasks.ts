import { TasksRole } from "./tasksRole"

export type Tasks={
    id: string,
    description: string,
    deadline: Date,
    status: string,
    id_projects: string
}