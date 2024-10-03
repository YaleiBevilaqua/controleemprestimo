import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePessoaUseCaseInput } from "./create-pessoa-usecase-input";
import { CreatePessoaUseCaseOutput } from "./create-pessoa-usecase-output";

export class CreatePessoaUseCase {
    constructor(private readonly pessoaRepository: PessoaRepository){}

    execute(input: CreatePessoaUseCaseInput): CreatePessoaUseCaseOutput{
        
        const pessoa = new Pessoa(input.name, input.id);

        this.pessoaRepository.create(pessoa);
        return{};
    }
}