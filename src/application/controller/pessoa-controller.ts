import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa-usecase";
import { GetAllPessoaUseCase } from "../use-cases/get-all-pessoa/get-pessoas-usecase";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa-usecase";

export class PessoaController{
    constructor(private readonly pessoaRepository: PessoaRepository) {}

    getAll(input: any){
        const getAllPessoaUseCase = new GetAllPessoaUseCase(this.pessoaRepository);
        return getAllPessoaUseCase.execute(input);
    }

    create(input: any){
        const createPessoaUseCase = new CreatePessoaUseCase(this.pessoaRepository);
        createPessoaUseCase.execute(input);
    }

    update(input: any){
        const updatePessoaUseCase = new UpdatePessoaUseCase(this.pessoaRepository);
        updatePessoaUseCase.execute(input);
    }


}