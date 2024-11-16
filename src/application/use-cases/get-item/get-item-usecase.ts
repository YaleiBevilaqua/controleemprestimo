import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetItemUseCaseInput } from "./get-item-usecase-input";
import { GetItemUseCaseOutput } from "./get-item-usecase-output";

export class GetItemUseCase {
    private itemRepository: ItemRepository; 
        constructor(readonly repositoryFactory: RepositoryFactory){this.itemRepository =repositoryFactory.createItemRepository()}

    async execute(input: GetItemUseCaseInput): Promise<GetItemUseCaseOutput>{
        const item = await this.itemRepository.getById(input.id)

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