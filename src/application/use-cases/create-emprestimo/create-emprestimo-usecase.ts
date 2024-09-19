import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { CreateEmprestimoInput } from "./create-emprestimo-input";
import { CreateEmprestimoOutput } from "./create-emprestimo-output";

export class CreateEmprestimoUseCase {
    constructor(private readonly EmprestimoRepository: EmprestimoRepository){}

    execute(input: CreateEmprestimoInput): CreateEmprestimoOutput{
        return{};
    }
}