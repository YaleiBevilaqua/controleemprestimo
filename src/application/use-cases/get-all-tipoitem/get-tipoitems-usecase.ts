import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetAllTipoItemUseCaseInput } from "./get-tipoitems-usecase-input";
import { GetAllTipoItemUseCaseOutput } from "./get-tipoitems-usecase-output";

export class GetTipoItemsUseCase{
    constructor (private readonly ItemTypeRepository: ItemTypeRepository){}

    execute(input: GetAllTipoItemUseCaseInput): GetAllTipoItemUseCaseOutput{
        return{}
    }
}