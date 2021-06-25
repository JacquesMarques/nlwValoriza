import {Request, Response} from "express";
import {CreateUserService} from "../services/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, password, email, admin = false} = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, password, email, admin});

        response.json(user);
    }
}
