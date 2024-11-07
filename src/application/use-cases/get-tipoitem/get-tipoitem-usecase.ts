import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetTipoItemUseCaseInput } from "./get-tipoitem-usecase-input";
import { GetTipoItemUseCaseOutput } from "./get-tipoitem-usecase-output";

export class GetTipoItemUseCase{
    constructor (private readonly itemTypeRepository: ItemTypeRepository){}

    execute(input: GetTipoItemUseCaseInput): GetTipoItemUseCaseOutput{
        const tipoItem = this.itemTypeRepository.getById(input.id)
        return {
            id: tipoItem.getId(),
            name: tipoItem.getName()
        }
    }
}