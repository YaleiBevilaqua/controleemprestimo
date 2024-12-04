import { Pessoa } from "../../../domain/entity/pessoa";
import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateUsuarioUseCaseInput } from "./update-usuario-input";
import { UpdateUsuarioUseCaseOutput } from "./update-usuario-output";

export class UpdateUsuarioUseCase {
    private usuarioRepository: UsuarioRepository
    private pessoaRepository: PessoaRepository
    constructor(private readonly repositoryFactory: RepositoryFactory){
        this.usuarioRepository = repositoryFactory.createUsuarioRepository()
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }


    async execute(input: UpdateUsuarioUseCaseInput): Promise<UpdateUsuarioUseCaseOutput> {
        if(!input.id){
        throw new Error("Preencha todos os campos")
        }else {

            const pessoa = await this.pessoaRepository.getById(input.id_pessoa);
            const novousuario = new Usuario(input.username, input.password, pessoa,input.id);
            await this.usuarioRepository.update(novousuario)
        }
        return {}
    }
}