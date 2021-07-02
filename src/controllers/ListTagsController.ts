import {Request, Response } from "express";
import {ListTagsService} from "../services/ListTagsService";

export class ListTagsController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        response.json( tags );
    }
}
