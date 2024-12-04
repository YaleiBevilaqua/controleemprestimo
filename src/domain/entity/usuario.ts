import { v4 } from 'uuid';
import { Pessoa } from './pessoa';

export class Usuario{
    private id: string;
    private username: string;
    private password: string;
    private pessoa: Pessoa; 

    //Método que vai ser executado quando a classe é instanciada, quando da um new item, executa.
    constructor( username: string, password: string, pessoa: Pessoa, id?: string,){
        
        if (!id){
            id = v4();
        }
        this.id = id;
        this.pessoa = pessoa;
        this.username = username;
        this.password = password;
    }

    getId():string{
        return this.id;
    }
    getUsername():string{
        return this.username;
    }

    getPassword():string{
        return this.password;
    }
    
    getPessoa(): Pessoa{
        return this.pessoa
    }


}