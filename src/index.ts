import { app } from "./app";
import { projectRouter } from "./routes/projectRouter";
import { tasksRouter } from "./routes/tasksRouter";

app.use("/project", projectRouter)
app.use("/tasks", tasksRouter)