import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemUseCaseInput } from "./get-item-usecase-input";
import { GetItemUseCaseOutput } from "./get-item-usecase-output";

export class GetItemUseCase {
    constructor(private readonly itemRepository: ItemRepository){}

    execute(input: GetItemUseCaseInput): GetItemUseCaseOutput{
        const item = this.itemRepository.getById(input.id)

        return{
            id: item.getId(),
            name: item.getName(),
            itemType: {
                id: item.getTipoItem().getId(),
                name: item.getTipoItem().getName()
            }
        }
    }
}