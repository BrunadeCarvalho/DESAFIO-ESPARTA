import { CustomError } from "./CustomError";


export class InvalidStatus extends CustomError{ 
    constructor(){
        super(400, "Status informado inválido, escolha se ele está em ANDAMENTO, PROGRESSO ou CONCLUÍDO.")
    }
}
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

export class NotNullId extends CustomError{
    constructor(){
        super(400, "Favor informar o id da tarefa que deseja editar.")
    }
}

