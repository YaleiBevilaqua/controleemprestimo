import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class ItemRepositoryMemory implements ItemRepository{
    private items: Item[];
    constructor(){
        const itemType1 = new TipoItem('Copos', '5ed7eee4-1f7c-470a-97c8-ad5badf2bbec')
        const itemtype2 = new TipoItem('Computadores', '6d5daf6d-09fa-4eaf-a109-832817950c6f')
        this.items = [
            new Item('Copo de café', itemType1, '75ddd42f-dec4-464c-9435-be246175976d'),
            new Item('Copo de Água', itemType1, '8329e8a6-1ee6-4efc-b1fa-95c880d148d0'),
            new Item('computador desktop dell', itemtype2, '86933b41-0a5f-4806-a48a-caff4ed963c2')
        ]
    }
    getAll(): Item[] {
        return this.items;
    }
    getById(id: string): Item {
        throw new Error("Method not implemented.");
    }
    create(item: Item): void {
        this.items.push(item)
    }
    update(item: Item): void {
        throw new Error("Method not implemented.");
    }

}