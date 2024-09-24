import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetAllUsuarioUseCaseInput } from "./get-usuarios-usecase-input";
import { GetAllUsuarioUseCaseOutput } from "./get-usuarios-usecase-output";

export class GetUsuariosUseCase{
    constructor(private readonly UsuarioRepository:UsuarioRepository){}

    execute(input: GetAllUsuarioUseCaseInput): GetAllUsuarioUseCaseOutput{
        return{}
    }
}
