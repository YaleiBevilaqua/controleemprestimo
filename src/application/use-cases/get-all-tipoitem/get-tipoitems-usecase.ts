import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllTipoItemUseCaseInput } from "./get-tipoitems-usecase-input";
import { GetAllTipoItemUseCaseOutput } from "./get-tipoitems-usecase-output";

export class GetTipoItemsUseCase{
    private itemTypeRepository: ItemTypeRepository
    constructor (readonly repositoryFactory: RepositoryFactory){
        this.itemTypeRepository = repositoryFactory.createItemTypeRepository();
    }

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
        return output;
    }
}