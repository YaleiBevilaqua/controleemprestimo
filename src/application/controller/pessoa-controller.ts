import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa-usecase";
import { GetAllPessoaUseCase } from "../use-cases/get-all-pessoa/get-pessoas-usecase";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa-usecase";

export class PessoaController{
    constructor(private readonly repositoryFactory: RepositoryFactory
    ) {}

    // async getAll(input: any){
    //     const getAllPessoaUseCase = new GetAllPessoaUseCase(this.pessoaRepository);
    //     return await getAllPessoaUseCase.execute(input);
    // }

    async create(input: any){
        const createPessoaUseCase = new CreatePessoaUseCase(this.repositoryFactory);
        await createPessoaUseCase.execute(input);
    }

    // // async update(input: any){
    // //     const updatePessoaUseCase = new UpdatePessoaUseCase(this.pessoaRepository);
    // //     await updatePessoaUseCase.execute(input);
    // }


}