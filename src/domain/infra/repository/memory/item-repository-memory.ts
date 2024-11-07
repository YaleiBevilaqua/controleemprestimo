import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class ItemRepositoryMemory implements ItemRepository {
    private items: Item[];
    constructor(){
        const itemType1 = new TipoItem('Luvas', '301b9761-cc87-4e2a-acfe-1735e664c845')
        const itemType2 = new TipoItem('Proteção Térmica', '7db182e4-4dcb-454c-82e5-aa5df6369128')
        this.items = [
            new Item('Luva de Borracha', itemType1, 'e3a8d0be-add1-4777-a011-a08a90377f84'),
            new Item('Luva de Aço', itemType1, '74d94b24-77bb-439f-9758-d5219462957d'),
            new Item('Japona Térmica', itemType2, 'a1dc53b9-2768-4ec2-85d6-8107acf8c660')
        ]
    }
    async delete(id: string): Promise<void> {
        const items = this.items.filter(value => value.getId() != id)
        this.items = items
    }
    async getAll(): Promise<Item[]> {
        return this.items;
    }
    async getById(id: string): Promise<Item> {
        const item = this.items.find(valor => valor.getId() == id)

        if (!item) {
            throw new Error('Item not found');
        }

        return item;
    }
    async create(item: Item): Promise<void> {
        this.items.push(item)
    }
    async update(item: Item): Promise<void> {
        this.items = this.items.map(value => {
            if (value.getId() == item.getId()){
                return item;
            }

            return value;
        })

    }

}