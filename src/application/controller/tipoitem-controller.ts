import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { GetTipoItemsUseCase } from "../use-cases/get-all-tipoitem/get-tipoitems-usecase";
import { GetTipoItemUseCase } from "../use-cases/get-tipoitem/get-tipoitem-usecase";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipoitem/update-tipoitem-usecase";

export class TipoItemController{
    constructor(private repositoryFactory: RepositoryFactory) {}

    
    async getAll(input: any) { 
        const getTipoItems = new GetTipoItemsUseCase(this.repositoryFactory);
        return await getTipoItems.execute(input);
    }
    
    async create(input: any){
        try{  const createTypeItemUseCase = new CreateTipoItemUseCase(
            this.repositoryFactory);
            return await createTypeItemUseCase.execute(input);
        }catch (e: any) {
            return {
                message: e.message
            }
        }
    }

    async getById(id: string){
        try{
            const getTipoItem= new GetTipoItemUseCase(this.repositoryFactory);
            return await getTipoItem.execute({id});
        }catch (e: any) {
            return {
                message: e.message
            }
        }
    }

    async update(input: any){
        try{
            const updateTipoItemUseCase = new UpdateTipoItemUseCase(this.repositoryFactory);
            return await updateTipoItemUseCase.execute(input);
        }catch (error) {
            throw new Error('Falha em atualizar')
        }
    }
}