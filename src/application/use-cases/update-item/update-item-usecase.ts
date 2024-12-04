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
        console.log('3')
        if (!input.id) {
         throw new Error('É necessário um ID');
        }
        console.log('4')
        if(!input.itemTypeId){
            throw new Error('É necessário um tipo de item');
        }
        console.log('5')
        const tipoitem = await this.itemTypeRepository.getById(input.itemTypeId);
        console.log('6')
        const novoitem = new Item(input.name, tipoitem, input.id, input.validade);
        console.log('7')
        this.itemRepository.update(novoitem);
        return{} 
     }
 }