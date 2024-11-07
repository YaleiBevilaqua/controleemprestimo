import { Emprestimo } from "../../../entity/emprestimo";
import { EmprestimoRepository } from "../../../repository/emprestimo-repository";
import { Connection } from "../../database/connection";

export class EmprestimoRepositoryDatabase implements EmprestimoRepository{

    constructor(private connection: Connection){}
    async getAll(): Promise<Emprestimo[]> {
        const output = [];
        const emprestimosData = await this.connection.execute(`
            SELECT 
            emprestimos.id, emprestimos.data_emprestimo, emprestimos.data_devolução,
            pessoas.id, pessoas.nome, pessoas.documento,
            usuarios.id, usuarios.nomeusuario, 
            itens.id, itens.nome, 
            tipos_item.id, tipos_item.nome,
            itens_epi.ca, itens_epi.validade
            FROM emprestimos

            LEFT JOIN pessoas ON pessoas.id = emprestimos.id_pessoa
            LEFT JOIN usuarios ON usuarios.id = emprestimos.id_usuario
            LEFT JOIN itens ON itens.id = emprestimos.id_item
            LEFT JOIN tipos_item ON tipos_item.id = itens.id_tipo_item
            LEFT JOIN itens_epi ON itens_epi.id_item = itens.id
            `)

            for(const emprestimoData of emprestimosData){
                output.push(new Emprestimo(emprestimoData.id, emprestimoData.item, emprestimoData.data_emprestimo, emprestimoData.data_devolução, emprestimoData.pessoa, emprestimoData.usuario))
            }
            return output
    }
    async getById(id: string): Promise<Emprestimo> {
        const [ emprestimoData ] = await this.connection.execute(`
            SELECT 
            emprestimos.id, emprestimos.data_emprestimo, emprestimos.data_devolução,
            pessoas.id, pessoas.nome, pessoas.documento,
            usuarios.id, usuarios.nomeusuario, 
            itens.id, itens.nome, 
            tipos_item.id, tipos_item.nome,
            itens_epi.ca, itens_epi.validade
            FROM emprestimos

            LEFT JOIN pessoas ON pessoas.id = emprestimos.id_pessoa
            LEFT JOIN usuarios ON usuarios.id = emprestimos.id_usuario
            LEFT JOIN itens ON itens.id = emprestimos.id_item
            LEFT JOIN tipos_item ON tipos_item.id = itens.id_tipo_item
            LEFT JOIN itens_epi ON itens_epi.id_item = itens.id
            where emprestimos.id = $1
            `, [id]);

            if(!emprestimoData){
                throw new Error("Usuário não encontrado")
            }

            return new Emprestimo(emprestimoData.id, emprestimoData.item, emprestimoData.data_emprestimo, emprestimoData.data_devolução, emprestimoData.pessoa, emprestimoData.usuario)
    }
    async create(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            INSERT INTO emprestimos(id, data_emprestimo, data_devolução, id_pessoa, id_usuario, id_item)
            VALUES($1, $2, $3, $4, $5, $6)
            `, [emprestimo.getId(), emprestimo.getDataEmprestimo(), emprestimo.getDataDevolucao(), emprestimo.getPessoa(), emprestimo.getUsuario(), emprestimo.getItem()])
    }
    async update(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            update emprestimos set
            data_emprestimo = $1
            data_devolucao = $2
            where id = $3`, 
            [emprestimo.getDataEmprestimo(), emprestimo.getDataDevolucao(), emprestimo.getId()])
    }

    
}

