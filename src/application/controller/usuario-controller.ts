import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario-usecase";
import { GetAllUsuariosUseCase } from "../use-cases/get-all-usuario/get-usuarios-usecase";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario-usecase";

export class UsuarioController{
    constructor(private readonly repositoryFactory: RepositoryFactory) {}

    async getAll(input: any){
        const getAllUsuarioUseCase = new GetAllUsuariosUseCase(this.repositoryFactory);
        return await getAllUsuarioUseCase.execute(input);
    }
    async create(input: any){
        try{
            const createUsuarioUseCas= new CreateUsuarioUseCase(
                this.repositoryFactory
            );

            return await createUsuarioUseCas.execute(input)
        }catch(e:any){return{
            message: e.message
        }

        }
    }
}