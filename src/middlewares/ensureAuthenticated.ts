import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Recceber o token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");

    // Validar se é valido

    try {
        const { sub } = verify(token, "763f1cfa46571799852042a23aeaeb84") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (e) {
        return response.status(401).end();
    }
}
