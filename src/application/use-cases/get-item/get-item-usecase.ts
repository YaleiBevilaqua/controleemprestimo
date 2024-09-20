import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemUseCaseInput } from "./get-item-usecase-input";
import { GetItemUseCaseOutput } from "./get-item-usecase-output";

export class GetItemUseCase {
    constructor(private readonly ItemRepository: ItemRepository){}

    execute(input: GetItemUseCaseInput): GetItemUseCaseOutput{
        return{}
    }
}