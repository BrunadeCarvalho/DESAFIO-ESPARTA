import { app } from "./app";
import { projectRouter } from "./routes/projectRouter";

app.use("/project", projectRouter)