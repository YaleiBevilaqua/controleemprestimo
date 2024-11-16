import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { UpdateTypeItemUseCase } from "../use-cases/update-tipoitem/update-tipoitem-usecase";

export class TipoItemController{
    constructor(private repositoryFactory: RepositoryFactory) {}

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