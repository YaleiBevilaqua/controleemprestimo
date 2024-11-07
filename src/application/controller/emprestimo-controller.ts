import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo-usecase";

export class EmprestimoController{
    constructor(
        private readonly emprestimoRepository: EmprestimoRepository,
        private readonly pessoaRepository: PessoaRepository,
        private readonly usuarioRepository: UsuarioRepository,
        private readonly itemRepository: ItemRepository
    ) {}

    create(input: any){
        const createEmprestimoUseCase = new CreateEmprestimoUseCase(this.emprestimoRepository, this.pessoaRepository, this.usuarioRepository, this.itemRepository);
        createEmprestimoUseCase.execute(input);
    }

    update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.emprestimoRepository);
        updateEmprestimoUseCase.execute(input);
    }
}