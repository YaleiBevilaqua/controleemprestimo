import { Item } from "../entity/item";
import { TipoItem } from "../entity/tipo-item";

export interface ItemTypeRepository {
    getAll(): Promise<TipoItem[]>;
    getById(id: string): Promise<TipoItem>;
    create(tipoitem: TipoItem): Promise<void>;
    update(tipoitem: TipoItem): Promise<void>;
}