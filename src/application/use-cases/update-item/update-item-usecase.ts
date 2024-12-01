import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdateItemUseCaseInput } from "./update-item-input";
import { UpdateItemUseCaseOutput } from "./update-item-output";

export class UpdateItemUseCase {
    private itemRepository: ItemRepository;
    private itemTypeRepository: ItemTypeRepository;
        constructor(private repositoryFactory: RepositoryFactory){
            this.itemRepository = this.repositoryFactory.createItemRepository()
            this.itemTypeRepository = this.repositoryFactory.createItemTypeRepository()
        }

    async execute(input: UpdateItemUseCaseInput): Promise<UpdateItemUseCaseOutput>{
        if (!input.id) {
         throw new Error('É necessário um ID');
        }else if(!input.tipoItemId){
            throw new Error('É necessário um tipo de item');
        }else {
            const tipoitem = await this.itemTypeRepository.getById(input.tipoItemId);
            const novoitem = new Item(input.nome, tipoitem, input.id);
            await this.itemRepository.update(novoitem)
        }
        return{} 
     }
 }