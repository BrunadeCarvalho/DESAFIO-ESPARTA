import { CustomError } from "./CustomError";

export class NotNullDeadline extends CustomError{
    constructor(){
        super(400, "Favor preencha o campo deadline.")
    }
}

export class NotNullDescription extends CustomError{
    constructor(){
        super(400, "Favor preencha o campo descrição.")
    }
}

export class NotNullStatus extends CustomError{
    constructor(){
        super(400, "Favor preencha o campo status.")
    }
}

export class NotNullIdProjects extends CustomError{
    constructor(){
        super(400, "Favor preencha o campo id do projeto.")
    }
}

