import { Emprestimo } from "../../../entity/emprestimo";
import { Item } from "../../../entity/item";
import { Pessoa } from "../../../entity/pessoa";
import { TipoItem } from "../../../entity/tipo-item";
import { Usuario } from "../../../entity/usuario";
import { EmprestimoRepository } from "../../../repository/emprestimo-repository";
import { Connection } from "../../database/connection";

export class EmprestimoRepositoryDatabase implements EmprestimoRepository{

    constructor(private connection: Connection){}
    async getAll(): Promise<Emprestimo[]> {
        const output = [];
        const senha = "";
        const emprestimosData = await this.connection.execute(`
            SELECT 
            emprestimos.id as id_emprestimo, emprestimos.data_emprestimo, emprestimos.data_devolucao,
            pessoas.id as id_pessoas, pessoas.nome as nome_pessoas, pessoas.documento,
            usuarios.id as id_usuarios, usuarios.nomeusuario, 
            itens.id as id_itens, itens.nome as nome_itens, 
            tipos_item.id as id_tipos_item, tipos_item.nome as nome_tipos_item
            FROM emprestimos

            LEFT JOIN pessoas ON pessoas.id = emprestimos.id_pessoa
            LEFT JOIN usuarios ON usuarios.id = emprestimos.id_usuario
            LEFT JOIN itens ON itens.id = emprestimos.id_item
            LEFT JOIN tipos_item ON tipos_item.id = itens.id_tipo_item
            `)

            for(const emprestimoData of emprestimosData){
            const pessoa = new Pessoa(
                emprestimoData.nome_pessoas,
                emprestimoData.documento,
                emprestimoData.id_pessoas
            )
            
            const usuario = new Usuario(
                emprestimoData.nomeusuario,
                emprestimoData.senha,
                pessoa,
                emprestimoData.id_usuarios
            )

            const itemType = new TipoItem(
                emprestimoData.nome_tipos_item,
                emprestimoData.id_tipos_item
            )

            const item = new Item(
                emprestimoData.nome_itens,
                itemType,
                emprestimoData.id_itens
            )

            const emprestimo = new Emprestimo(
                item,
                emprestimoData.data_emprestimo,
                pessoa,
                usuario,
                emprestimoData.data_devolucao,
                emprestimoData.id_emprestimo
            )
            console

            output.push(emprestimo)
        }
            return output


    }
    async getById(id: string): Promise<Emprestimo> {
        const senha = "";
        const [ emprestimoData ] = await this.connection.execute(`
            SELECT 
            emprestimos.id as id_emprestimo, emprestimos.data_emprestimo, emprestimos.data_devolucao,
            pessoas.id as id_pessoas, pessoas.nome as nome_pessoas, pessoas.documento,
            usuarios.id as id_usuarios, usuarios.nomeusuario, 
            itens.id as id_itens, itens.nome as nome_itens, 
            tipos_item.id as id_tipos_item, tipos_item.nome as nome_tipos_item
            FROM emprestimos

            LEFT JOIN pessoas ON pessoas.id = emprestimos.id_pessoa
            LEFT JOIN usuarios ON usuarios.id = emprestimos.id_usuario
            LEFT JOIN itens ON itens.id = emprestimos.id_item
            LEFT JOIN tipos_item ON tipos_item.id = itens.id_tipo_item
            where emprestimos.id = $1`, [id]);

            if(!emprestimoData){
                throw new Error("Emprestimo não encontrado")
            }

            const pessoa = new Pessoa(
                emprestimoData.nome_pessoas,
                emprestimoData.documento,
                emprestimoData.id_pessoas
            )
            
            const usuario = new Usuario(
                
                emprestimoData.nomeusuario,
                emprestimoData.senha,
                pessoa,
                emprestimoData.id_usuarios
                
            )

            const itemType = new TipoItem(
                emprestimoData.nome_tipos_item,
                emprestimoData.id_tipos_item
            )

            const item = new Item(
                emprestimoData.nome_itens,
                itemType,
                emprestimoData.id_itens
            )

            const emprestimo = new Emprestimo(
                item,
                emprestimoData.data_emprestimo,
                pessoa,
                usuario,
                emprestimoData.data_devolucao,
                emprestimoData.id_emprestimo
            )
            return emprestimo
            
    }
    async create(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            INSERT INTO emprestimos(data_emprestimo, data_devolucao, id_pessoa, id_usuario, id_item)
            VALUES($1, $2, $3, $4, $5)
            `, [emprestimo.getDataEmprestimo(), emprestimo.getDataDevolucao(), emprestimo.getPessoa().getId(), emprestimo.getUsuario().getId(), emprestimo.getItem().getId()])
    }


    async update(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            update emprestimos set
            id_item = $1
            data_emprestimo = $2,
            id_pessoa = $3,
            id_usuario = $4,
            data_devolucao = $5

            where id = $6`,
            [emprestimo.getItem(), emprestimo.getDataEmprestimo(), emprestimo.getPessoa(), emprestimo.getUsuario(), emprestimo.getDataDevolucao(), emprestimo.id]);
    }

    
}

