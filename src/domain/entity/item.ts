import { v4 } from 'uuid';
import { TipoItem } from './tipo-item';

export class Item{
    // private name: string;
    readonly id: string;
    private tipoItem: TipoItem

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor(readonly name: string, tipoItem: TipoItem, id?: string){
        this.name = name;
        if (!id){
            id = v4();
        }
        this.id = id;
        this.tipoItem = tipoItem
    }

    getName():string{
        return this.name;
    }

    getId():string{
        return this.id;
    }

    getTipoItem():TipoItem{
        return this.tipoItem;
    }
}