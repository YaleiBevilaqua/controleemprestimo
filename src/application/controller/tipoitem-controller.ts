import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { UpdateTypeItemUseCase } from "../use-cases/update-tipoitem/update-tipoitem-usecase";

export class TipoItemController{
    constructor(private readonly ItemTypeRepository: ItemTypeRepository) {}

    create(input: any){
        const createTypeItemUseCase = new CreateTipoItemUseCase(this.ItemTypeRepository);
        createTypeItemUseCase.execute(input);
    }

    update(input: any){
        const updateTypeItemUseCase = new UpdateTypeItemUseCase(this.ItemTypeRepository);
        updateTypeItemUseCase.execute(input);
    }
}