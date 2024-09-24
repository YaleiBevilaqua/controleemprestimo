import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { UpdateEmprestimoUseCaseInput } from "./update-emprestimo-input";
import { UpdateEmprestimoUseCaseOutput } from "./update-emprestimo-output";

export class UpdateEmprestimoUseCase {
    constructor(private readonly EmprestimoRepository: EmprestimoRepository) {}

    execute(input: UpdateEmprestimoUseCaseInput): UpdateEmprestimoUseCaseOutput{
        return{}
    }
}