import { ItemRepository } from "../../../domain/repository/item-repository";
import { CreateItemUseCaseInput } from "./create-item-usecase-input";
import { CreateItemUseCaseOutput } from "./create-item-usecase-output";

export class CreateItemUseCase {
    constructor(private readonly ItemRepository: ItemRepository){}

    execute(input: CreateItemUseCaseInput): CreateItemUseCaseOutput{
        return{};
    }
}