import {Request, Response } from "express";
import { ListUserReceiveComplementsService } from "../services/ListUserReceiveComplimentsService";

export class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserReceiveComplementsServer = new ListUserReceiveComplementsService();

        const compliments = await listUserReceiveComplementsServer.execute(user_id);

        return response.status(200).json(compliments);
    }
}
