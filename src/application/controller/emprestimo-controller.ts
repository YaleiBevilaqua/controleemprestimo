import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimo/get-emprestimos-usecase";
import { GetEmprestimoUseCase } from "../use-cases/get-emprestimo/get-emprestimo-usecase";
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

    async getById(id: string){
        try{
            const getEmprestimoUseCase = new GetEmprestimoUseCase(this.repositoryFactory);
            return await getEmprestimoUseCase.execute({id});
        } catch(e: any) {
            return {
                message: e.message
            }
        }
    }
    
    async update(input: any){
        try{
            console.log("1")
            const updateEmprestimoUseCase= new UpdateEmprestimoUseCase(this.repositoryFactory);
            console.log("2")
            return await updateEmprestimoUseCase.execute(input)
        }catch(error){
            throw new Error ("falha ao atualizar")
        }
    }
}