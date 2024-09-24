import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioUseCaseInput } from "./get-usuario-usecase-input";
import { GetUsuarioUseCaseOutput } from "./get-usuario-usecase-output";

export class GetUsuarioUseCase{
    constructor(private readonly UsuarioRepository:UsuarioRepository ){}

    execute(input: GetUsuarioUseCaseInput): GetUsuarioUseCaseOutput{
        return{}
    }
}
