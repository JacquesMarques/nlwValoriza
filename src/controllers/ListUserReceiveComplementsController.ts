import {Request, Response } from "express";
import {ListUserSernderComplimentsService} from "../services/ListUserSenderComplimentsService";

export class ListUserSenderComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserSenderComplimentsService = new ListUserSernderComplimentsService();

        const compliments = await listUserSenderComplimentsService.execute(user_id);

        return response.status(200).json(compliments);
    }
}
