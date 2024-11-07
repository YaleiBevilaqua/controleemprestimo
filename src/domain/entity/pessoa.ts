import { v4 } from 'uuid';

export class Pessoa{
    private name: string;
    private id: string;
    private documento: string;

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor(name: string, documento: string, id?: string){
        this.name = name;
        if (!id){
            id = v4();
        }
        this.id = id;
        this.documento = documento;
    }

    getName():string{
        return this.name;
    }

    getId():string{
        return this.id;
    }

    getDocumento():string{
        return this.documento;
    }
}