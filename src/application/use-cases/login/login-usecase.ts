import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { LoginUseCaseInput} from "./login-usecase-input";
import { LoginUseCaseOutput } from "./login-usecase-output";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class LoginUseCase {

    private usuarioRepository: UsuarioRepository;

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
        const user = await this.usuarioRepository.getByUsername(input.username);
        const isValidPassword = await compare(input.password, user.getPassword());
        if (!isValidPassword) {
            throw new Error("Senha Inválida");
        }
        const token = sign({
            id: user.getId(),
            username: input.username,
            password: user.getPassword()
        }, 'teste');
        return {
            token
        }

    }
}