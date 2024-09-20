import { Emprestimo } from "../entity/emprestimo";
import { Item } from "../entity/item";
import { Pessoa } from "../entity/pessoa";
import { TipoItem } from "../entity/tipo-item";
import { Usuario } from "../entity/usuario";

export interface EmprestimoRepository {
    getAll(): Emprestimo[];
    getById(id: string): Emprestimo;
    create(emprestimo: Emprestimo): void;
    update(emprestimo: Emprestimo): void;
}