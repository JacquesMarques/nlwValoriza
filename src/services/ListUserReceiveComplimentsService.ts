import {getCustomRepository} from "typeorm";
import {ComplimentsRepository} from "../repositories/ComplimentsRepository";

export class ListUserReceiveComplementsServer {
    async execute(user_id: string) {
        const complimentRepositoryRepository = getCustomRepository(ComplimentsRepository);

        return await complimentRepositoryRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: [
                "userSender", "userReceiver", "tag"
            ]
        });
    }
}
