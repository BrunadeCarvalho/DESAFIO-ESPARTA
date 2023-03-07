import { CustomError } from "./CustomError";

export class NotNullDescription extends CustomError{
    constructor(){
        super(400, "description is required")
    }
}

export class NotNullName extends CustomError{
    constructor(){
        super(400, "name is required")
    }
}

export class ProjectNotFound extends CustomError{
    constructor(){
        super(404, "project not found")
    }
}