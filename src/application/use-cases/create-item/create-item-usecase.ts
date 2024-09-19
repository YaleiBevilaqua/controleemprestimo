import { ItemRepository } from "../../../domain/repository/item-repository";

export class CreateItemUseCase {
    constructor(private readonly ItemRepository: ItemRepository){}

    execute(input: CreateItemUseCaseInput): CreateItemUseCaseOutput:{
        return{};
    }
}