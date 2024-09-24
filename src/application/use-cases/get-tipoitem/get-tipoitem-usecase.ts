import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetTipoItemUseCaseInput } from "./get-tipoitem-usecase-input";
import { GetTipoItemUseCaseOutput } from "./get-tipoitem-usecase-output";

export class GetTipoItemUseCase{
    constructor (private readonly ItemTypeRepository: ItemTypeRepository){}

    execute(input: GetTipoItemUseCaseInput): GetTipoItemUseCaseOutput{
        return{}
    }
}