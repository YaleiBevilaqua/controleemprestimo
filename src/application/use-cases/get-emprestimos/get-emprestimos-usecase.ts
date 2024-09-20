import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimosUseCaseInput } from "./get-emprestimos-usecase-input";
import { GetEmprestimosUseCaseOutput } from "./get-emprestimos-usecase-output";

export class GetEmprestimosUseCase{
    constructor(private readonly EmprestimoRepository: EmprestimoRepository){}

    execute(input: GetEmprestimosUseCaseInput): GetEmprestimosUseCaseOutput{
        return{}
    }
}