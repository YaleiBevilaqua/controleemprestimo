import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdateTipoItemUseCaseInput } from "./update-tipoitem-input";
import { UpdateTipoItemUseCaseOutput } from "./update-tipoitem-output";

export class UpdateTipoItemUseCase {
    private tipoItemRepository: ItemTypeRepository;
    constructor(private repositoryFactory: RepositoryFactory) {
        this.tipoItemRepository = this.repositoryFactory.createItemTypeRepository();
    }

    async execute(input: UpdateTipoItemUseCaseInput): Promise<UpdateTipoItemUseCaseOutput>{
        if(!input.id){
            throw new Error('Falta informações');
        }else{
            const novotipoitem = new TipoItem(input.nome, input.id)
            await this.tipoItemRepository.update(novotipoitem);
        }
        return {}
    }
}