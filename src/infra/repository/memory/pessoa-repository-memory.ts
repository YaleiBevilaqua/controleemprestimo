import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";

export class PessoaRepositoryMemory implements PessoaRepository{
    private pessoas: Pessoa[]

    constructor(){
        this.pessoas=[
            new Pessoa('Matheus', 'ccb7f118-251c-472b-9bc9-4157935df07f'),
            new Pessoa('Victor', 'caf74ffe-1da0-4513-aedf-9645b48cd748')
        ]
    }
    getAll(): Pessoa[] {
        return this.pessoas;
    }
    getById(id: string): Pessoa {
        throw new Error("Method not implemented.");
    }
    create(pessoa: Pessoa): void {
        throw new Error("Method not implemented.");
    }
    update(pessoa: Pessoa): void {
        throw new Error("Method not implemented.");
    }
}