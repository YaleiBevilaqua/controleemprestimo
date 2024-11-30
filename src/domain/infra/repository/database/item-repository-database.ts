
import { Item } from "../../../entity/item";
import { TipoItem } from "../../../entity/tipo-item";
import { ItemRepository } from "../../../repository/item-repository";
import { Connection } from "../../database/connection";


export default class ItemRepositoryDatabase implements ItemRepository {

    constructor(private connection: Connection) {
    }
    
    async getAll(): Promise<Item[]> {
        const output = []
        const itensData = await this.connection.execute(`
              select i.id, i.nome, i.id_tipo_item, ti.id as tipo_item_id, ti.nome as nome_tipoitem
                from itens i
                LEFT JOIN tipos_item ti ON ti.id = i.id_tipo_item`);

        for (const itemData of itensData) {
            const tipoItem = new TipoItem(  
                itemData.nome_tipoitem,
                itemData.tipo_item_id
            )

            const item = new Item(
                itemData.nome,
                tipoItem,
                itemData.id
                )

            output.push(item)
        }

        return output;
    }



    async getById(id: string): Promise<Item> {
        const [ itemData ] = await this.connection.execute(`
            select i.id, i.nome, i.id_tipo_item, ti.id as tipo_item_id, ti.nome as nome_tipoitem, iepi.ca, iepi.validade
            from itens i
            LEFT JOIN tipos_item ti ON ti.id = i.id_tipo_item
            LEFT JOIN itens_epi iepi ON iepi.id_item = i.id
            where i.id = $1`,
            [id]
        );

        if (!itemData) {
            throw new Error('Item não encontrado');
        }

        const tipoItem = new TipoItem(
            itemData.nome_tipoitem,
            itemData.tipo_item_id
        )

        const item = new Item(
            itemData.nome,
            tipoItem,
            itemData.id
            )

        return item;
    }



    async create(item: Item): Promise<void> {
        await this.connection.execute(`
            insert into itens(id, nome, id_tipo_item)
            values ($1, $2, $3)`,
            [item.id, item.name, item.getTipoItem().getId()]);        
    }



    async update(item: Item): Promise<void> {
        await this.connection.execute(`
            update itens set
            nome = $1,
            id_tipo_item = $2
            where id = $3
            `,
            [item.name, item.getTipoItem().getId(), item.id]);
    }

    
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
