import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdateItemUseCaseInput } from "./update-item-input";
import { UpdateItemUseCaseOutput } from "./update-item-output";

export class UpdateItemUseCase {
    private itemRepository: ItemRepository; 
        constructor(readonly repositoryFactory: RepositoryFactory){this.itemRepository =repositoryFactory.createItemRepository()}

    execute(input: UpdateItemUseCaseInput): UpdateItemUseCaseOutput{
        return {}
    }
}