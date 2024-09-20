import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";

export class ItemController{
    constructor(private readonly itemRepository: ItemRepository) {}

    create(input: any){
        const createItemUseCase = new CreateItemUseCase(this.itemRepository);
        createItemUseCase.execute(input);
    }

    update(input: any){
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository);
        updateItemUseCase.execute(input);
    }
}