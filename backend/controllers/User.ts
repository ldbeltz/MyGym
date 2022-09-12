import { Request, Response } from "express";

const store = function(request:Request, response: Response){
    response.json([{
        "Nome":"Gerome Santos",
        "Objetivo":"Hipertrofia",
        "Email":"gerome.santos@gmail.com",
        "Idade":25
    },
    {
        "Nome":"Amanda Carvalho",
        "Objetivo":"Emagrecimento",
        "Email":"amanda.carv@gmail.com",
        "Idade":20
    },
    {
        "Nome":"Raphael Silva",
        "Objetivo":"Emagrecimento",
        "Email":"rapha.silva@gmail.com",
        "Idade":32
    },
    {
        "Nome":"Kamila Almeida",
        "Objetivo":"Hipertrofia",
        "Email":"kmila.almeida@gmail.com",
        "Idade":48
    }]);
}

export {store};