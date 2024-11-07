import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UpdatePessoaUseCaseInput } from "./update-pessoa-input";
import { UpdatePessoaUseCaseOutput } from "./update-pessoa-output";

export class UpdatePessoaUseCase {
    constructor(private readonly pessoaRepository: PessoaRepository) {}

    execute(input: UpdatePessoaUseCaseInput): UpdatePessoaUseCaseOutput{
        return {}
    }
}