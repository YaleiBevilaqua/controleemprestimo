import { ItemRepository } from "./item-repository";
import { ItemTypeRepository } from "./item-type-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository
    createItemTypeRepository(): ItemTypeRepository;
}