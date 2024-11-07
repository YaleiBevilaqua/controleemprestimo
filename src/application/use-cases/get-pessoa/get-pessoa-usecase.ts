import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPessoaUseCaseInput } from "./get-pessoa-usecase-input";
import { GetPessoaUseCaseOutput } from "./get-pessoa-usecase-output";

export class GetPessoaUseCase{
    constructor(private readonly pessoaRepository: PessoaRepository){}

    async execute(input: GetPessoaUseCaseInput): Promise<GetPessoaUseCaseOutput>{
        const pessoa = await this.pessoaRepository.getById(input.id)
        return{
                id: pessoa.getId(),
                name: pessoa.getName(),
                documento: pessoa.getDocumento()
        }
    }
}