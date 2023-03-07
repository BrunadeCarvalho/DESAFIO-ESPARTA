import { CustomError } from "./CustomError";

export class InvalidStatus extends CustomError{ 
    constructor(){
        super(400, "invalid Status")
    }
}
export class NotNullDeadline extends CustomError{
    constructor(){
        super(400, "deadline is required")
    }
}

export class NotNullDescription extends CustomError{
    constructor(){
        super(400, "description is required.")
    }
}

export class NotNullStatus extends CustomError{
    constructor(){
        super(400, "status is required")
    }
}

export class NotNullIdProject extends CustomError{
    constructor(){
        super(400, "id_Project is required")
    }
}

export class TaskNotFound extends CustomError{
    constructor(){
        super(404, "task not found")
    }
}