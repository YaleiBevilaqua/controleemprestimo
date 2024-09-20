import { Item } from "../entity/item";
import { Pessoa } from "../entity/pessoa";
import { TipoItem } from "../entity/tipo-item";
import { Usuario } from "../entity/usuario";

export interface UsuarioRepository {
    getAll(): Usuario[];
    getById(id: string): Usuario;
    getByUsername(usuario: string): Usuario;
    create(usuario: Usuario): void;
    update(usuario: Usuario): void;
}