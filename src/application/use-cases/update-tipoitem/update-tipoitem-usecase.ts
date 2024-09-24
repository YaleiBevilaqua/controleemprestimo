import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { UpdateTypeItemUseCaseInput } from "./update-tipoitem-input";
import { UpdateTypeItemUseCaseOutput } from "./update-tipoitem-output";

export class UpdateTypeItemUseCase {
    constructor(private readonly TypeItemRepository: ItemTypeRepository) {}

    execute(input: UpdateTypeItemUseCaseInput): UpdateTypeItemUseCaseOutput{
        return {}
    }
}