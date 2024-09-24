import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuariosUseCaseInput } from "./get-usuarios-usecase-input";
import { GetUsuariosUseCaseOutput } from "./get-usuarios-usecase-output";

export class GetUsuariosUseCase{
    constructor(private readonly UsuarioRepository:UsuarioRepository){}

    execute(input: GetUsuariosUseCaseInput): GetUsuariosUseCaseOutput{
        return{}
    }
}
