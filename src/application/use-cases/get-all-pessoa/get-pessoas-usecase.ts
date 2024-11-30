import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllPessoaUseCaseInput } from "./get-pessoas-usecase-input";
import { GetAllPessoaUseCaseOutput } from "./get-pessoas-usecase-output";

export class GetAllPessoaUseCase{
    private pessoaRepository: PessoaRepository;
    constructor(private readonly repositryFactory: RepositoryFactory){this.pessoaRepository=repositryFactory.createPessoaRepository()}

    async execute(input: GetAllPessoaUseCaseInput): Promise<GetAllPessoaUseCaseOutput[]> {
        const listaDePessoas = await this.pessoaRepository.getAll();

        const output: GetAllPessoaUseCaseOutput[] = [];

        for(const itemdalista of listaDePessoas){
            output.push(
                {
                id: itemdalista.getId(),
                name: itemdalista.getName(),
                documento:itemdalista.getDocumento(),
                }
            )
            
        }
        return output
    }
}