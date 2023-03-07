import { CustomError } from "./CustomError";

export class InvalidStatus extends CustomError{ 
    constructor(){
        super("invalid Status")
    }
}
export class NotNullDeadline extends CustomError{
    constructor(){
        super("deadline is required")
    }
}

export class NotNullDescription extends CustomError{
    constructor(){
        super("description is required.")
    }
}

export class NotNullStatus extends CustomError{
    constructor(){
        super("status is required")
    }
}

export class NotNullIdProject extends CustomError{
    constructor(){
        super("id_Project is required")
    }
}

export class TaskNotFound extends CustomError{
    constructor(){
        super("task not found", 404)
    }
}