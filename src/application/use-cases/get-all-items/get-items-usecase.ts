import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetAllItemUseCaseOutput } from "./get-item-usecase-output";
import { GetAllItemUseCaseInput } from "./get-items-usecase-input";

export class GetAllItemUseCase {
    constructor(private readonly itemRepository: ItemRepository){}

    execute(input: GetAllItemUseCaseInput): GetAllItemUseCaseOutput[] {
        const listaDeItems = this.itemRepository.getAll();

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