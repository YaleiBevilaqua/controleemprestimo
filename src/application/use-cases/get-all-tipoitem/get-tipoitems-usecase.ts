import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetAllTipoItemUseCaseInput } from "./get-tipoitems-usecase-input";
import { GetAllTipoItemUseCaseOutput } from "./get-tipoitems-usecase-output";

export class GetTipoItemsUseCase{
    constructor (private readonly itemTypeRepository: ItemTypeRepository){}

    async execute(input: GetAllTipoItemUseCaseInput): Promise<GetAllTipoItemUseCaseOutput[]> {
        const listaDeTipoDeItems = await this.itemTypeRepository.getAll()

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