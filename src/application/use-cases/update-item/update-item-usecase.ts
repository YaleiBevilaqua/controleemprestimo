import { ItemRepository } from "../../../domain/repository/item-repository";
import { UpdateItemUseCaseInput } from "./update-item-input";
import { UpdateItemUseCaseOutput } from "./update-item-output";

export class UpdateItemUseCase {
    constructor(private readonly itemRepository: ItemRepository) {}

    execute(input: UpdateItemUseCaseInput): UpdateItemUseCaseOutput{
        return {}
    }
}