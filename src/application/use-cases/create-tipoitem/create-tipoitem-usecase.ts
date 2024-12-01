import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreateTipoItemUseCaseInput } from "./create-tipoitem-usecase-input";
import { CreateTipoItemUseCaseOutput } from "./create-tipoitem-usecase-output";

export class CreateTipoItemUseCase {
    private readonly itemTypeRepository: ItemTypeRepository

    constructor (private repositoryFactory: RepositoryFactory){
        this.itemTypeRepository= repositoryFactory.createItemTypeRepository();
    }

  async execute(input: CreateTipoItemUseCaseInput){
        if (!input.name) {
        throw new Error('Nome do Tipo de item não informado');
        }
        
        const tipoItem = new TipoItem(input.id, input.name);

        await this.itemTypeRepository.create(tipoItem);
        return{}
    }
}