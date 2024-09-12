import { Item } from "../entity/item";
import { Pessoa } from "../entity/pessoa";
import { TipoItem } from "../entity/tipo-item";

export interface PessoaRepository {
    getAll(): Pessoa[];
    getById(id: string): Pessoa;
    create(pessoa: Pessoa): void;
    update(pessoa: Pessoa): void;
}