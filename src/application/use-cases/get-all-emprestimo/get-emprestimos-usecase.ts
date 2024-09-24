import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetAllEmprestimoUseCaseInput } from "./get-emprestimos-usecase-input";
import { GetAllEmprestimoUseCaseOutput } from "./get-emprestimos-usecase-output";

export class GetEmprestimosUseCase{
    constructor(private readonly EmprestimoRepository: EmprestimoRepository){}

    execute(input: GetAllEmprestimoUseCaseInput): GetAllEmprestimoUseCaseOutput{
        return{}
    }
}