import { response } from "express";
import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUsuarioUseCaseInput } from "./create-usuario-usecase-input";
import { CreateUsuarioUseCaseOutput } from "./create-usuario-usecase-output";

export class CreateUsuarioUseCase {
    private usuarioRepository: UsuarioRepository;
    private pessoaRepository: PessoaRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }

    async execute(input: CreateUsuarioUseCaseInput): Promise<CreateUsuarioUseCaseOutput> {
        if (!input.username) {
            throw new Error("Username não informado");
        }
        if (!input.password) {
            throw new Error("Senha não informada");
        }
        const id_pessoa = await this.pessoaRepository.getById(input.id_pessoa);

        const usuario = new Usuario(input.id, input.username, input.password, id_pessoa);

        await this.usuarioRepository.create(usuario);
        return {}; // Certifique-se de que isso está de acordo com CreateUsuarioUseCaseOutput
    }
}