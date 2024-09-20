import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimoUseCaseInput } from "./get-emprestimo-usecase-input";
import { GetEmprestimoUseCaseOutput } from "./get-emprestimo-usecase-output";

export class GetEmprestimoUseCase{
    constructor(private readonly EmprestimoRepository: EmprestimoRepository){}

    execute(input: GetEmprestimoUseCaseInput): GetEmprestimoUseCaseOutput{
        return{}
    }
}