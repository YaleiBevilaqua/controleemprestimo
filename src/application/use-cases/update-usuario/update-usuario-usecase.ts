import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateUsuarioUseCaseInput } from "./update-usuario-input";
import { UpdateUsuarioUseCaseOutput } from "./update-usuario-output";

export class UpdateUsuarioUseCase {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    execute(input: UpdateUsuarioUseCaseInput): UpdateUsuarioUseCaseOutput{
        return {}
    }
}