import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdatePessoaUseCaseInput } from "./update-pessoa-input";
import { UpdatePessoaUseCaseOutput } from "./update-pessoa-output";

export class UpdatePessoaUseCase {
    private pessoaRepository: PessoaRepository
    constructor(private readonly repositoryFactory: RepositoryFactory)
    {this.pessoaRepository=repositoryFactory.createPessoaRepository()}


    async execute(input: UpdatePessoaUseCaseInput): Promise<UpdatePessoaUseCaseOutput>{
        if(!input.id || !input.nome || !input.documento){
            throw new Error("Preencha todos os campos")
        }else {
            const novapessoa = new Pessoa(input.id, input.nome, input.documento);
            await this.pessoaRepository.update(novapessoa);
        }
        return {}
    }
}