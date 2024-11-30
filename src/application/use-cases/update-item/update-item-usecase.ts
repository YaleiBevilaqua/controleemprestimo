import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdateItemUseCaseInput } from "./update-item-input";
import { UpdateItemUseCaseOutput } from "./update-item-output";

export class UpdateItemUseCase {
        constructor(private readonly itemRepository:ItemRepository,
            private readonly itemTypeRepository:ItemTypeRepository
        ){}
    
    

//     execute(input: UpdateItemUseCaseInput): UpdateItemUseCaseOutput{
//         const item = this.itemRepository.getById(input.id);
//         const Tipo_item= this.itemRepository.getById(input.tipoItemId);

//         const novoItem = new Item(input.nome, Tipo_item, item.getid())
//         this.itemRepository.update(novoItem);
//         return {id: item.getid() }
//     }
 }