import { Emprestimo } from "../entity/emprestimo";
import { Item } from "../entity/item";
import { Pessoa } from "../entity/pessoa";
import { TipoItem } from "../entity/tipo-item";
import { Usuario } from "../entity/usuario";

export interface EmprestimoRepository {
    getAll(): Promise<Emprestimo[]>;
    getById(id: string): Promise<Emprestimo>;
    create(emprestimo: Emprestimo): Promise<void>;
    update(emprestimo: Emprestimo): Promise<void>;
}