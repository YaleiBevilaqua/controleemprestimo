import { error } from "console";
import { Usuario } from "../../../entity/usuario";
import { UsuarioRepository } from "../../../repository/usuario-repository";
import { Connection } from "../../database/connection";

export class UsuarioRepositoryDatabase implements UsuarioRepository{
    
    constructor(private connection: Connection){}
    
    async getAll(): Promise<Usuario[]> {
        const output = [];
        const usuariosData = await this.connection.execute(`
            select us.id, us.nomeusuario, is.senha, pe.id, pe.nome, pe.documento from usuarios us
            LEFT JOIN pessoas pe ON pe.id = us.id_pessoa
            `)

            for(const usuarioData of usuariosData){
                output.push(new Usuario(usuarioData.id, usuarioData.username, usuarioData.password, usuarioData.pessoa))
            }
            return output
    }



    async getById(id: string): Promise<Usuario> {
        const [ usuarioData ] = await this.connection.execute(`
            select us.id, us.nomeusuario, is.senha, pe.id, pe.nome, pe.documento from usuarios us
            LEFT JOIN pessoas pe ON pe.id = us.id_pessoa
            where us.id = $1
            `, [id]);

            if(!usuarioData){
                throw new Error("Usuário não encontrado")
            }

            return new Usuario(usuarioData.username, usuarioData.password, usuarioData.pessoa, usuarioData.id)
    }



    async getByUsername(usuario: string): Promise<Usuario> {
        const [ usuarioData ] = await this.connection.execute(`
            select us.id, us.nomeusuario, is.senha, pe.id, pe.nome, pe.documento from usuarios us
            LEFT JOIN pessoas pe ON pe.id = us.id_pessoa
            where us.nomeusuario = $1
            `, [usuario])

            if(!usuarioData){
                throw new Error("Usuário não encontrado")
            }

            return new Usuario(usuarioData.username, usuarioData.password, usuarioData.pessoa, usuarioData.id)
    }



    async create(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            INSERT INTO usuarios(id, id_pessoa, nomeusuario, senha)
            VALUES($1, $2, $3, $4)
            `, [usuario.getId(), usuario.getPessoa(), usuario.getUsername(), usuario.getPassword()])
    }



    async update(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            update usuarios set
            nomeusuario = $1
            senha = $2
            where id = $3`, 
            [usuario.getUsername(), usuario.getPassword()])
    }

}