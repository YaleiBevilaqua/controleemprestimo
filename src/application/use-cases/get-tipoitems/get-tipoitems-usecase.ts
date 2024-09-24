import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetTipoItemsUseCaseInput } from "./get-tipoitems-usecase-input";
import { GetTipoItemsUseCaseOutput } from "./get-tipoitems-usecase-output";

export class GetTipoItemsUseCase{
    constructor (private readonly ItemTypeRepository: ItemTypeRepository){}

    execute(input: GetTipoItemsUseCaseInput): GetTipoItemsUseCaseOutput{
        return{}
    }
}