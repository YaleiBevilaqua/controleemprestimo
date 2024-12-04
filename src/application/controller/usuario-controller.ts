import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario-usecase";
import { GetAllUsuariosUseCase } from "../use-cases/get-all-usuario/get-usuarios-usecase";
import { GetUsuarioUseCase } from "../use-cases/get-usuario/get-usuario-usecase";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa-usecase";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario-usecase";

export class UsuarioController{
    constructor(private readonly repositoryFactory: RepositoryFactory) {}

    async getAll(input: any){
        const getAllUsuarioUseCase = new GetAllUsuariosUseCase(this.repositoryFactory);
        return await getAllUsuarioUseCase.execute(input);
    }
    
    async create(input: any){
        try{
            const createUsuarioUseCase= new CreateUsuarioUseCase(this.repositoryFactory);
            return await createUsuarioUseCase.execute(input)
        }catch(e:any){return{
            message: e.message
        }

        }
    }

    async update(input: any){
        try{
            const updateUsuarioUseCase = new UpdateUsuarioUseCase(this.repositoryFactory);
            return await updateUsuarioUseCase.execute(input);
        }catch (error) {
            throw new Error('Falha em atualizar o usuario')
        }
    }

    async getById(id: string){
        try {
        const getusuario = new GetUsuarioUseCase(this.repositoryFactory);
        return await getusuario.execute({id});
        } catch (e: any) {
            return {
                message: e.message
            }
    }   
    }
}