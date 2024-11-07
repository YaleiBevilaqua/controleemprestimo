import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetAllPessoaUseCaseInput } from "./get-pessoas-usecase-input";
import { GetAllPessoaUseCaseOutput } from "./get-pessoas-usecase-output";

export class GetAllPessoaUseCase{
    constructor(private readonly pessoaRepository: PessoaRepository){}

    async execute(input: GetAllPessoaUseCaseInput): Promise<GetAllPessoaUseCaseOutput[]> {
        const listaDePessoas = await this.pessoaRepository.getAll();

        const output: GetAllPessoaUseCaseOutput[] = [];

        for(const itemdalista of listaDePessoas){
            output.push(
                {
                id: itemdalista.getId(),
                name: itemdalista.getName()
                }
            )

        }
        return output
    }
}