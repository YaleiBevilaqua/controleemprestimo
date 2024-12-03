import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimo/get-emprestimos-usecase";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo-usecase";

export class EmprestimoController{
    constructor(private repositoryFactory: RepositoryFactory
    ) {}
    async getAll(input: any){
        const emprestimos = new GetAllEmprestimosUseCase(this.repositoryFactory);
        return await emprestimos.execute(input);

    }

    async create(input: any){
        try {
            const createEmprestimoUseCase = new CreateEmprestimoUseCase(
                this.repositoryFactory
            );
            return await createEmprestimoUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }

    }
    // update(input: any){
    //     const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.emprestimoRepository);
    //     updateEmprestimoUseCase.execute(input);
    // }
}2