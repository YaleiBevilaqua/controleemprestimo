import { v4 } from 'uuid';

export class Pessoa{
    readonly id: string;
    private name: string;
    private documento: string;

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor(name: string, documento: string, id?: string){
        
        if (!id){
            id = v4();
        }
        this.id = id;
        this.name = name;
        this.documento = documento;
    }
    getId():string{
        return this.id;
    }

    getName():string{
        return this.name;
    }

    getDocumento():string{
        return this.documento;
    }
}