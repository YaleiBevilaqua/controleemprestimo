import { v4 } from 'uuid';

export class TipoItem{
    private name: string;
    private id: string;

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor(name: string, id?: string){
        if (!id){
            id = v4();
        }
        this.id = id;
        this.name = name;
    }

    getId():string{
        return this.id;
    }

    getName():string{
        return this.name;
    }
}