import { TipoItem } from "../../../domain/entity/tipo-item";
import { CreateTipoItemUseCaseInput } from "./create-tipoitem-usecase-input";
import { CreateTipoItemUseCaseOutput } from "./create-tipoitem-usecase-output";

export class CreateTipoItemUseCase {
    constructor (private readonly TipoItem: TipoItem){}

    execute(input: CreateTipoItemUseCaseInput): CreateTipoItemUseCaseOutput{
        return{}
    }
}