import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUsuarioUseCaseInput } from "./create-usuario-usecase-input";
import { CreateUsuarioUseCaseOutput } from "./create-usuario-usecase-output";


export class CreateUsuarioUseCase {
    constructor (
        private readonly usuarioRepository: UsuarioRepository,
        private readonly pessoaRepository: PessoaRepository
    ){}

    execute(input: CreateUsuarioUseCaseInput): CreateUsuarioUseCaseOutput{

        const usuario = new Usuario(input.username, input.password, input.pessoaId, input.id)
        return{}
    }
}