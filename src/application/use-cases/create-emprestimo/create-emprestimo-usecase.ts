import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { CreateEmprestimoUseCaseInput } from "./create-emprestimo-input";
import { CreateEmprestimoUseCaseOutput } from "./create-emprestimo-output";

export class CreateEmprestimoUseCase {
    constructor(private readonly EmprestimoRepository: EmprestimoRepository){}

    execute(input: CreateEmprestimoUseCaseInput): CreateEmprestimoUseCaseOutput{
        return{};
    }
}