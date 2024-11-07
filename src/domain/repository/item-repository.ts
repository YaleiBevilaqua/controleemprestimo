import { Item } from "../entity/item";
import { TipoItem } from "../entity/tipo-item";

export interface ItemRepository {
    getAll(): Promise<Item[]>;
    getById(id: string): Promise<Item>;
    create(item: Item): Promise<void>;
    update(item: Item): Promise<void>;
}