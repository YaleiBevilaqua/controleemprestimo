import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";

export class EmprestimoController{
    constructor(private readonly emprestimoRepository: EmprestimoRepository)

    create(input: any){
        const createEmprestimoUseCase = new CreateEmprestimoUseCase;
        createEmprestimoUseCase.execute(input);
    }
}