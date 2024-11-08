import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreateItemUseCaseInput } from "./create-item-usecase-input"; 

export class CreateItemUseCase {
    private itemRepository: ItemRepository;
    private itemTypeRepository: ItemTypeRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.itemTypeRepository = repositoryFactory.createItemTypeRepository();
    }
    
    async execute(input: CreateItemUseCaseInput) {
        if (!input.name) {
            throw new Error('Nome do item não informado');
        }
        if (!input.itemTypeId) {
            throw new Error('Tipo do item não informado');
        }

        const itemType = await this.itemTypeRepository.getById(input.itemTypeId);

        const item = new Item(input.name, itemType);

        await this.itemRepository.create(item);

        return {};


    }
}