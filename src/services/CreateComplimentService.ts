import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string
}

export class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message } : IComplimentRequest) {
        const complimentRepository = getCustomRepository(ComplimentsRepository);
        const userRepository = getCustomRepository(UsersRepository);

        if (user_receiver === user_sender) {
            throw new Error("User Receiver cannot by equal User Sender");
        }

        const userReceiverExists = await userRepository.findOne(user_receiver);

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists");
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
}
