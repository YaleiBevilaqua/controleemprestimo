import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePessoaUseCaseInput } from "./create-pessoa-usecase-input";
import { CreatePessoaUseCaseOutput } from "./create-pessoa-usecase-output";

export class CreatePessoaUseCase {
    constructor(private readonly pessoaRepository: PessoaRepository){}

    execute(input: CreatePessoaUseCaseInput): CreatePessoaUseCaseOutput{
        return{};
    }
}