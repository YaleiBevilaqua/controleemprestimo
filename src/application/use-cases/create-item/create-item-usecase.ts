import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { CreateItemUseCaseInput } from "./create-item-usecase-input";
import { CreateItemUseCaseOutput } from "./create-item-usecase-output";

export class CreateItemUseCase {
    constructor(
        readonly itemRepository: ItemRepository,
        readonly itemTypeRepository: ItemTypeRepository
    ){}

    execute(input: CreateItemUseCaseInput): CreateItemUseCaseOutput{
        
        const itemType = this.itemTypeRepository.getById(input.itemTypeId);

        const item = new Item(input.name, itemType, input.id );

        this.itemRepository.create(item);
        return{};
    }
}