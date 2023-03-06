import { CustomError } from "./CustomError";

export class NotNullDescription extends CustomError{
    constructor(){
        super(400, "Favor preencha o campo descrição.")
    }
}

export class NotNullTitle extends CustomError{
    constructor(){
        super(400, "Favor preencha o campo titulo.")
    }
}

export class NoProjects extends CustomError{
    constructor(){
        super(404, "Nenhum projeto foi encontrado.")
    }
}

export class ProjectNotFound extends CustomError{
    constructor(){
        super(404, "Projeto não localizado, verifique se o id está correto.")
    }
}