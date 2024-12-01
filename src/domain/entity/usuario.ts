import { v4 } from 'uuid';
import { Pessoa } from './pessoa';

export class Usuario{
    private username: string;
    private id: string;
    private password: string;
    private pessoa: Pessoa;

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor(id: string, username: string, password: string, pessoa: Pessoa, ){
        this.username = username;
        if (!id){
            id = v4();
        }
        this.id = id;
        this.password = password;
        this.pessoa = pessoa;
    }

    getUsername():string{
        return this.username;
    }

    getId():string{
        return this.id;
    }

    getPassword():string{
        return this.password;
    }

    getPessoa(): Pessoa{
        return this.pessoa
    }
}