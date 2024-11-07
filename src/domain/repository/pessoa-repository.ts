import { Item } from "../entity/item";
import { Pessoa } from "../entity/pessoa";
import { TipoItem } from "../entity/tipo-item";

export interface PessoaRepository {
    getAll(): Promise<Pessoa[]>;
    getById(id: string): Promise<Pessoa>;
    create(pessoa: Pessoa): Promise<void>;
    update(pessoa: Pessoa): Promise<void>;
}