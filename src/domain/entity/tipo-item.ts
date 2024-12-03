import { v4 } from 'uuid';

export class TipoItem{
    private id: string;
    private nome: string;

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor(name: string, id?: string){
        if (!id){
            id = v4();
        }
        this.id = id;
        this.nome = name;
    }

    getId():string{
        return this.id;
    }

    getName():string{
        return this.nome;
    }
}