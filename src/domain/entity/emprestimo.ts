import { v4 } from 'uuid';

import { Item } from "./item"
import { Pessoa } from "./pessoa";
import { Usuario } from "./usuario";

export class Emprestimo{
    readonly id: string;
    private item: Item;
    private dataEmprestimo: Date;
    private dataDevolucao: string | undefined;
    private pessoa: Pessoa;
    private usuario: Usuario

    constructor(item: Item, dataEmprestimo: Date, pessoa: Pessoa, usuario: Usuario,  dataDevolucao?: string, id?: string){
        if (!id){
            id = v4();
        }
        this.id = id;
        this.item = item;
        this.dataEmprestimo = dataEmprestimo;
        this.pessoa = pessoa;
        this.usuario = usuario;
        this.dataDevolucao = dataDevolucao;
    }



    getId(): string | undefined{
        return this.id
    }

    getItem(): Item{
        return this.item
    }

    getDataEmprestimo(): Date{
        return this.dataEmprestimo
    }

    getPessoa(): Pessoa{
        return this.pessoa
    }

    getUsuario(): Usuario{
        return this.usuario
    }
    getDataDevolucao(): string | undefined{
        return this.dataDevolucao
    }
}