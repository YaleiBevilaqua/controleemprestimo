import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPessoaUseCaseInput } from "./get-pessoa-usecase-input";
import { GetPessoaUseCaseOutput } from "./get-pessoa-usecase-output";

export class GetPessoaUseCase{
    constructor(private readonly PessoaRepository: PessoaRepository){}

    execute(input: GetPessoaUseCaseInput): GetPessoaUseCaseOutput{
        return{}
    }
}