import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { GetTipoItemsUseCase } from "../use-cases/get-all-tipoitem/get-tipoitems-usecase";

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

  

//     update(input: any){
//         const updateTypeItemUseCase = new UpdateTypeItemUseCase(this.repositoryFactory);
//         updateTypeItemUseCase.execute(input);
//     }
}