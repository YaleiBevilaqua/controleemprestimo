import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemsUseCaseOutput } from "./get-item-usecase-output";
import { GetItemsUseCaseInput } from "./get-items-usecase-input";

export class GetItemsUseCase {
    constructor(private readonly ItemRepository: ItemRepository){}

    execute(input: GetItemsUseCaseInput): GetItemsUseCaseOutput[] {
        const listaDeItems = this.ItemRepository.getAll();

        const output: GetItemsUseCaseOutput[] = [];

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