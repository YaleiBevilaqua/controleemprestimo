import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa-usecase";
import { GetAllPessoaUseCase } from "../use-cases/get-all-pessoa/get-pessoas-usecase";
import { GetPessoaUseCase } from "../use-cases/get-pessoa/get-pessoa-usecase";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa-usecase";

export class PessoaController{
    constructor(private readonly repositoryFactory: RepositoryFactory
    ) {}

     async getAll(input: any){
         const getAllPessoaUseCase = new GetAllPessoaUseCase(this.repositoryFactory);
         return await getAllPessoaUseCase.execute(input);
     }

     async getById(id: string){
        try {
        const getpessoa = new GetPessoaUseCase(this.repositoryFactory);
        return await getpessoa.execute({id});
        } catch (e: any) {
            return {
                message: e.message
            }
    }   
     }
    

    async create(input: any){
        try{
            const createPessoaUseCase = new CreatePessoaUseCase(
                this.repositoryFactory
            );
            return await createPessoaUseCase.execute(input);
        }catch(e: any){
            return 
            {
                message: e.message
            }
        }
    }
        


    // // async update(input: any){
    // //     const updatePessoaUseCase = new UpdatePessoaUseCase(this.pessoaRepository);
    // //     await updatePessoaUseCase.execute(input);
    // }


}