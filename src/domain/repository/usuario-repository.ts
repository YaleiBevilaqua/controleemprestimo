import { Item } from "../entity/item";
import { Pessoa } from "../entity/pessoa";
import { TipoItem } from "../entity/tipo-item";
import { Usuario } from "../entity/usuario";

export interface UsuarioRepository {
    getAll(): Promise<Usuario[]>;
    getById(id: string): Promise<Usuario>;
    getByUsername(usuario: string): Promise<Usuario>;
    create(usuario: Usuario): Promise<void>;
    update(usuario: Usuario): Promise<void>;
}