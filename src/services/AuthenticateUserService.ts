import {getCustomRepository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import { sign  } from "jsonwebtoken";

interface IAuthenticateUserRequest {
    email: string,
    password: string
}

export class AuthenticateUserService {
    async execute({ email, password}: IAuthenticateUserRequest ) {
        const userRepository = getCustomRepository(UsersRepository);

        // Verifica se email existe
        const user = await userRepository.findOne({
            email
        });

        if (!user) {
           throw new Error("Email/Password incorrect");
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar Token
        const token = sign({
            email: user.email
        }, "763f1cfa46571799852042a23aeaeb84", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}
