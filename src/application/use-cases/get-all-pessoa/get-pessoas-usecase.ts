import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetAllPessoaUseCaseInput } from "./get-pessoas-usecase-input";
import { GetAllPessoaUseCaseOutput } from "./get-pessoas-usecase-output";

export class GetPessoasUseCase{
    constructor(private readonly PessoaRepository: PessoaRepository){}

    execute(input: GetAllPessoaUseCaseInput): GetAllPessoaUseCaseOutput{
        return{}
    }
}