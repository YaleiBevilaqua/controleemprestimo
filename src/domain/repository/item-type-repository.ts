import { Item } from "../entity/item";
import { TipoItem } from "../entity/tipo-item";

export interface ItemTypeRepository {
    getAll(): TipoItem[];
    getById(id: string): TipoItem;
    create(tipoitem: TipoItem): void;
    update(tipoitem: TipoItem): void;
}