import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPessoasUseCaseInput } from "./get-pessoas-usecase-input";
import { GetPessoasUseCaseOutput } from "./get-pessoas-usecase-output";

export class GetPessoasUseCase{
    constructor(private readonly PessoaRepository: PessoaRepository){}

    execute(input: GetPessoasUseCaseInput): GetPessoasUseCaseOutput{
        return{}
    }
}