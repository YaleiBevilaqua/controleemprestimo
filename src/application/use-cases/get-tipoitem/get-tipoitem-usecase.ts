import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetTipoItemUseCaseInput } from "./get-tipoitem-usecase-input";
import { GetTipoItemUseCaseOutput } from "./get-tipoitem-usecase-output";

export class GetTipoItemUseCase{
    private tipoItemRepository: ItemTypeRepository;
    constructor (private repositoryFactory: RepositoryFactory){this.tipoItemRepository=repositoryFactory.createItemTypeRepository()}

    async execute(input: GetTipoItemUseCaseInput): Promise<GetTipoItemUseCaseOutput>{
        const tipoItem = await this.tipoItemRepository.getById(input.id)
        return {
            id: tipoItem.getId(),
            name: tipoItem.getName()
        }
    }
}