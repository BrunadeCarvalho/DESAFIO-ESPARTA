import { CustomError } from "./CustomError";


export class InvalidStatus extends CustomError{ 
    constructor(){
        super(400, "Invalid Status")
    }
}
export class NotNullDeadline extends CustomError{
    constructor(){
        super(400, "Deadline is required")
    }
}

export class NotNullDescription extends CustomError{
    constructor(){
        super(400, "Description is required.")
    }
}

export class NotNullStatus extends CustomError{
    constructor(){
        super(400, "Status is required")
    }
}

export class NotNullIdProject extends CustomError{
    constructor(){
        super(400, "Id_Project is required")
    }
}

export class IdNotFound extends CustomError{
    constructor(){
        super(404, "Task Not Found")
    }
}

