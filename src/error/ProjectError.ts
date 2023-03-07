import { CustomError } from "./CustomError";

export class NotNullDescription extends CustomError{
    constructor(){
        super(400, "Description is required")
    }
}

export class NotNullName extends CustomError{
    constructor(){
        super(400, "Name is required")
    }
}

export class ProjectNotFound extends CustomError{
    constructor(){
        super(404, "Project not found")
    }
}