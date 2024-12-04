import { error } from "console";
import { Usuario } from "../../../entity/usuario";
import { UsuarioRepository } from "../../../repository/usuario-repository";
import { Connection } from "../../database/connection";
import { Pessoa } from "../../../entity/pessoa";

export class UsuarioRepositoryDatabase implements UsuarioRepository{
    
    constructor(private connection: Connection){}
    
    async getAll(): Promise<Usuario[]> {
        const output = [];
        const usuariosData = await this.connection.execute(`
        	select us.id, us.nomeusuario, us.senha, 
            pe.id as id_pessoa, pe.nome, pe.documento 
            from usuarios us
        	LEFT JOIN pessoas pe ON pe.id = us.id_pessoa
        	`)
            if (!usuariosData) {
        throw new Error(' não encontrado');
    }
    
    	    for (const usuarioData of usuariosData) {
                const pessoa = new Pessoa(
            	
                usuarioData.nome,
                usuarioData.documento,
                usuarioData.id_pessoa
        	)
        	const usuario = new Usuario(
            	
                usuarioData.nomeusuario,
                usuarioData.senha,
                pessoa,
                usuarioData.id
            )
            output.push(usuario)
        }        
        return output
    }



    async getById(id: string): Promise<Usuario> {
        const [ usuariosData ] = await this.connection.execute(`
        	SELECT us.id, us.nomeusuario, us.senha, 
            pe.id as id_pessoa, pe.nome, pe.documento 
            FROM usuarios us
        	LEFT JOIN pessoas pe ON pe.id = us.id_pessoa
        	where us.id = $1`, [id])

            if (!usuariosData) {
                throw new Error('Item não encontrado');
            }

        	const pessoa = new Pessoa(
                usuariosData.nome,
                usuariosData.documento,
                usuariosData.id
        	)

        	const usuario = new Usuario(
            	
                usuariosData.nomeusuario,
                usuariosData.senha,
                pessoa,
                usuariosData.id
            )
            
        return usuario
    }

    async getByUsername(usuario: string): Promise<Usuario> {
        const [ usuariosData ] = await this.connection.execute(`
        	select us.id, us.nomeusuario, us.senha, 
            pe.id as id_colaborador, pe.nome, pe.documento 
            from usuarios us
        	LEFT JOIN pessoas pe ON pe.id = us.id_pessoa
        	where i.nomeusuario = $1`, [usuario])

            if (!usuariosData) {
                throw new Error('Item não encontrado');
            }
        	const pessoa = new Pessoa(
            	usuariosData.id_colaborador,
                usuariosData.nome,
                usuariosData.documento
        	)

        	const usuario_entidade = new Usuario(
                usuariosData.nomeusuario,
                usuariosData.senha,
                pessoa,
                usuariosData.id
            )
            
        return usuario_entidade
    }



    async create(usuario: Usuario): Promise<void> {
        
        await this.connection.execute(`
            INSERT INTO usuarios(id_pessoa, nomeusuario, senha)
            VALUES($1, $2, $3)
            `, [usuario.getPessoa().getId(), usuario.getUsername(), usuario.getPassword()])
    }



    async update(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            update usuarios set
            nomeusuario = $1,
            senha = $2
            where id = $3`, 
            [usuario.getUsername(), usuario.getPassword(), usuario.getId()])
    }

}