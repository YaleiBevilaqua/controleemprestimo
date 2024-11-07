import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetTipoItemUseCaseInput } from "./get-tipoitem-usecase-input";
import { GetTipoItemUseCaseOutput } from "./get-tipoitem-usecase-output";

export class GetTipoItemUseCase{
    constructor (private readonly itemTypeRepository: ItemTypeRepository){}

    async execute(input: GetTipoItemUseCaseInput): Promise<GetTipoItemUseCaseOutput>{
        const tipoItem = await this.itemTypeRepository.getById(input.id)
        return {
            id: tipoItem.getId(),
            name: tipoItem.getName()
        }
    }
}