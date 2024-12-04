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
        console.log('3')
        if (!input.id) {
            throw new Error("O campo 'id' deve ser preenchido.");
        }
        console.log('4')
        if (!input.nome) {
            throw new Error("O campo 'nome' deve ser preenchido.");
        }
        console.log('5')
        if (!input.documento) {
            throw new Error("O campo 'documento' deve ser preenchido.");
        }

        console.log('6')
        const novapessoa = new Pessoa(input.nome, input.documento, input.id);
        console.log('7')
        this.pessoaRepository.update(novapessoa);
        return {}
    }
}