import { Pessoa } from "../../../entity/pessoa";
import { PessoaRepository } from "../../../repository/pessoa-repository";
import { Connection } from "../../database/connection";

export class PessoaRepositoryDatabase implements PessoaRepository {
    
    constructor(private connection: Connection) {
    }

    async getAll(): Promise<Pessoa[]> {
        const output = [];
        const pessoasData = await this.connection.execute(`
            select pessoas.id, pessoas.nome, pessoas.documento from pessoas`);

            for(const pessoaData of pessoasData){
        		const pessoa = new Pessoa(
                pessoaData.nome,
                pessoaData.documento,
                pessoaData.id
                )
                output.push(pessoa)
            }

        return output;
    }


    async getById(id: string): Promise<Pessoa> {
        const [ pessoaData ] = await this.connection.execute(`
            select pessoas.id, pessoas.nome, pessoas.documento from pessoas
            where id = $1`, [id]);

        if (!pessoaData){
            throw new Error('Colaborador não encontrado');
        }

        const pessoa = new Pessoa(
            
            pessoaData.nome,
            pessoaData.documento,
            pessoaData.id
        )

        return pessoa
    }


    async create(pessoa: Pessoa): Promise<void> {
        await this.connection.execute(`
            insert into pessoas (nome, documento)
            values($1, $2)`,
        [pessoa.getName(), pessoa.getDocumento()])
    }


    async update(pessoa: Pessoa): Promise<void> {
        console.log(pessoa)
         await this.connection.execute(`
            update pessoas set
            nome = $1,
            documento = $2
            where id = $3`, 
            [pessoa.getName(), pessoa.getDocumento(), pessoa.id]);
        
    }
    
}