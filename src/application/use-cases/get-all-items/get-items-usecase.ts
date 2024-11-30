import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllItemUseCaseOutput } from "./get-item-usecase-output";
import { GetAllItemUseCaseInput } from "./get-items-usecase-input";

export class GetAllItemUseCase {
    private itemRepository: ItemRepository; 
    constructor(readonly repositoryFactory: RepositoryFactory)
    {
        this.itemRepository =repositoryFactory.createItemRepository()
    }


    async execute(input: GetAllItemUseCaseInput): Promise<GetAllItemUseCaseOutput[]> {
        const listaDeItems = await this.itemRepository.getAll();

        const output: GetAllItemUseCaseOutput[] = [];

        for(const itemdalista of listaDeItems){
            output.push(
                {
                    id: itemdalista.getId(),
                    name: itemdalista.getName(),
                    itemType: {
                        id: itemdalista.getTipoItem().getId(),
                        name: itemdalista.getTipoItem().getName()
                    }
                }
            )
        }
        return output;
    }
}