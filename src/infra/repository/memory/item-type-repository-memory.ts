import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";

export class ItemTypeRepositoryMemory implements ItemTypeRepository{

    private types: TipoItem[]

    constructor(){
        this.types=[
            new TipoItem('Copos', '5ed7eee4-1f7c-470a-97c8-ad5badf2bbec'),
            new TipoItem('Computadores', '6d5daf6d-09fa-4eaf-a109-832817950c6f')
        ]
    }

    getAll(): TipoItem[] {
        throw new Error("Method not implemented.");
    }
    getById(id: string): TipoItem {
        const item = this.types.find(valor => valor.getId() == id)

        if(!item){
            throw new Error ('ItemType not found')
        }
        return item;
    }
    create(tipoitem: TipoItem): void {
        throw new Error("Method not implemented.");
    }
    update(tipoitem: TipoItem): void {
        throw new Error("Method not implemented.");
    }
}