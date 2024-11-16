import { ItemRepository } from "./item-repository";
import { ItemTypeRepository } from "./item-type-repository";
import { PessoaRepository } from "./pessoa-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository
    createItemTypeRepository(): ItemTypeRepository;
    createPessoaRepository(): PessoaRepository;

}