import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

interface ITagRequest {
    name: string
}

export class CreateTagService {
    async execute({ name } : ITagRequest) {
        const tagRepository = getCustomRepository(TagsRepository);

        if (!name) {
            throw new Error("Incorrect name");
        }

        const tagAlreadyExists = await tagRepository.findOne({
            name,
        });

        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const Tag = tagRepository.create({
            name,
        });

        await tagRepository.save(Tag);

        return Tag;
    }
}
