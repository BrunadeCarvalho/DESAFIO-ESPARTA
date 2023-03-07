import { CustomError } from "./CustomError";

export class NotNullDescription extends CustomError{
    constructor(){
        super("description is required")
    }
}

export class NotNullName extends CustomError{
    constructor(){
        super("name is required")
    }
}

export class ProjectNotFound extends CustomError{
    constructor(){
        super("project not found", 404)
    }
}