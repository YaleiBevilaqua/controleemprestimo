import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetPessoaUseCaseInput } from "./get-pessoa-usecase-input";
import { GetPessoaUseCaseOutput } from "./get-pessoa-usecase-output";

export class GetPessoaUseCase{
    private pessoaRepository: PessoaRepository;
    constructor(private readonly repositoryFactory: RepositoryFactory){this.pessoaRepository=repositoryFactory.createPessoaRepository()}

    async execute(input: GetPessoaUseCaseInput): Promise<GetPessoaUseCaseOutput>{
        const pessoa = await this.pessoaRepository.getById(input.id)
        return{
                id: pessoa.getId(),
                name: pessoa.getName(),
                documento: pessoa.getDocumento()
        }
    }
}