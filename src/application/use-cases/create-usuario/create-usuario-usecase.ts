import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUsuarioUseCaseInput } from "./create-usuario-usecase-input";
import { CreateUsuarioUseCaseOutput } from "./create-usuario-usecase-output";


export class CreateUsuarioUseCase {
    constructor (private readonly usuarioRepository: UsuarioRepository){}

    execute(input: CreateUsuarioUseCaseInput): CreateUsuarioUseCaseOutput{
        return{}
    }
}