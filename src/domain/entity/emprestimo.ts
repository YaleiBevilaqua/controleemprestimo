import { v4 } from 'uuid';

import { Item } from "./item"
import { Pessoa } from "./pessoa";
import { Usuario } from "./usuario";

export class Emprestimo{
    private id: string | undefined;
    private item: Item;
    private dataEmprestimo: Date;
    private dataDevolucao: Date | undefined;
    private pessoa: Pessoa;
    private usuario: Usuario

    constructor(item: Item, dataEmprestimo: Date, pessoa: Pessoa, usuario: Usuario, id?: string, dataDevolucao?: Date){
        this.id = id;
        this.item = item;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.pessoa = pessoa;
        this.usuario = usuario;
    }

    getDataDevolucao(): Date | undefined{
        return this.dataDevolucao
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
}