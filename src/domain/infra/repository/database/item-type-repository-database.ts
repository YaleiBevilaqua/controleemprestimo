import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { Connection } from "../../database/connection";

export class ItemTypeRepositoryDatabase implements ItemTypeRepository{
    
    constructor(private connection: Connection) {
    }

    async getAll(): Promise<TipoItem[]> {
        const output = [];
        const itemTypesData = await this.connection.execute(`select id, nome from tipos_item`);

        for (const itemTypeData of itemTypesData) {
            output.push(new TipoItem(itemTypeData.nome, itemTypeData.id));
        }
        return output;
    }
    async getById(id: string): Promise<TipoItem> {
        const [ itemTypeData ] = await this.connection.execute(`
            select id, nome from tipos_item
            where id = $1`, [id]);

        if (!itemTypeData){
            throw new Error('Tipo de Item não encontrado');
        }

        return new TipoItem(itemTypeData.nome, itemTypeData.id);
    }
    async create(itemType: TipoItem): Promise<void> {
        await this.connection.execute(`insert into tipos_item (id, nome)
            values($1, $2)`,
        [itemType.getId(), itemType.getName()])
    }
    async update(itemType: TipoItem): Promise<void> {
        await this.connection.execute(`update tipos_item set
            nome = $1
            where id = $2`, 
            [itemType.getName(), itemType.getId()]);
    }

}