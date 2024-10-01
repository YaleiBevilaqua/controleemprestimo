import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { CreateTipoItemUseCaseInput } from "./create-tipoitem-usecase-input";
import { CreateTipoItemUseCaseOutput } from "./create-tipoitem-usecase-output";

export class CreateTipoItemUseCase {
    constructor (private readonly itemTypeRepository: ItemTypeRepository){}

    execute(input: CreateTipoItemUseCaseInput): CreateTipoItemUseCaseOutput{
        return{}
    }
}