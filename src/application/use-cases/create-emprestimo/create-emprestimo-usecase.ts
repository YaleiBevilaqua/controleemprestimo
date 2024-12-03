import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCaseInput } from "./create-emprestimo-input";
import { CreateEmprestimoUseCaseOutput } from "./create-emprestimo-output";

export class CreateEmprestimoUseCase {

    private readonly emprestimoRepository: EmprestimoRepository
    private readonly pessoaRepository: PessoaRepository
    private readonly usuarioRepository: UsuarioRepository
    private readonly itemRepository: ItemRepository
    
    constructor(private repositoryFactory: RepositoryFactory
    ){
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository()
        this.pessoaRepository = repositoryFactory.createPessoaRepository()
        this.usuarioRepository = repositoryFactory.createUsuarioRepository()
        this.itemRepository = repositoryFactory.createItemRepository()

    }

    execute(input: CreateEmprestimoUseCaseInput): CreateEmprestimoUseCaseOutput{
        
        const emprestimo = new Emprestimo(input.id_item, input.dataEmprestimo, input.id_pessoa, input.id_usuario, input.id, input.dataDevolucao)

        this.emprestimoRepository.create(emprestimo)
        return{};
    }
}