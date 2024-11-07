import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { GetAllItemUseCase } from "../use-cases/get-all-items/get-items-usecase";
import { GetItemUseCase } from "../use-cases/get-item/get-item-usecase";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";

export class ItemController{
    constructor(private readonly itemRepository: ItemRepository,
                readonly tipoItemRepository: ItemTypeRepository
    ) {}

    getAll(input: any){
        const getAllItemUseCase = new GetAllItemUseCase(this.itemRepository);
        return getAllItemUseCase.execute(input);
    }
   
    create(input: any){
        const createItemUseCase = new CreateItemUseCase(this.itemRepository, this.tipoItemRepository);
        return createItemUseCase.execute(input);
    }

    update(input: any){
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository);
        updateItemUseCase.execute(input);
    }
}