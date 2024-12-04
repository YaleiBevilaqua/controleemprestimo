import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreatePessoaUseCaseInput } from "./create-pessoa-usecase-input";
import { CreatePessoaUseCaseOutput } from "./create-pessoa-usecase-output";

export class CreatePessoaUseCase {
    private readonly pessoaRepository: PessoaRepository
    constructor(private repositoryFactory: RepositoryFactory){
        this.pessoaRepository=repositoryFactory.createPessoaRepository();
    }

    async execute(input: CreatePessoaUseCaseInput){
        if (!input.name) {
            throw new Error('Nome não informado');
        }
        if (!input.documento) {
            throw new Error('Documento não informado');
        }
 
        const pessoa = new Pessoa(input.name, input.documento);

        await this.pessoaRepository.create(pessoa);
        return{};
    }
}