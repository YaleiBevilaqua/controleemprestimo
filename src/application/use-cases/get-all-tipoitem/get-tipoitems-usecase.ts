import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetAllTipoItemUseCaseInput } from "./get-tipoitems-usecase-input";
import { GetAllTipoItemUseCaseOutput } from "./get-tipoitems-usecase-output";

export class GetTipoItemsUseCase{
    constructor (private readonly itemTypeRepository: ItemTypeRepository){}

    execute(input: GetAllTipoItemUseCaseInput): GetAllTipoItemUseCaseOutput[] {
        const listaDeTipoDeItems = this.itemTypeRepository.getAll()

        const output: GetAllTipoItemUseCaseOutput[] = []

        for(const listaDeItems of listaDeTipoDeItems){
            output.push(
                {
                    id: listaDeItems.getId(),
                    name: listaDeItems.getName()
                }
            )
        }
        return output
    }
}