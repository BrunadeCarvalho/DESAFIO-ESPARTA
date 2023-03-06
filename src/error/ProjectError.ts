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