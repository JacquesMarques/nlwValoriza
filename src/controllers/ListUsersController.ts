import {Request, Response } from "express";
import {ListTagsService} from "../services/ListTagsService";
import {ListUsersService} from "../services/ListUsersService";

export class ListUsersController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const listUsersService = new ListUsersService();

        const users = await listUsersService.execute();

        response.json( users );
    }
}
