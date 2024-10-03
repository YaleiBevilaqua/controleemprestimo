import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCaseInput } from "./create-emprestimo-input";
import { CreateEmprestimoUseCaseOutput } from "./create-emprestimo-output";

export class CreateEmprestimoUseCase {
    constructor(
        private readonly emprestimoRepository: EmprestimoRepository,
        private readonly pessoaRepository: PessoaRepository,
        private readonly usuarioRepository: UsuarioRepository,
        private readonly itemRepository: ItemRepository
    ){}

    execute(input: CreateEmprestimoUseCaseInput): CreateEmprestimoUseCaseOutput{
        
        const emprestimo = new Emprestimo(input.item, input.dataEmprestimo, input.pessoa, input.usuario, input.id, input.dataDevolucao)

        this.emprestimoRepository.create(emprestimo)
        return{};
    }
}