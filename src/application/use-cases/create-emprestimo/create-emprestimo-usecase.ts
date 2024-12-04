import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCaseInput } from "./create-emprestimo-input";
import { CreateEmprestimoUseCaseOutput } from "./create-emprestimo-output";

export class CreateEmprestimoUseCase {

    private  emprestimoRepository: EmprestimoRepository
    private  pessoaRepository: PessoaRepository
    private  usuarioRepository: UsuarioRepository
    private  itemRepository: ItemRepository
    
    constructor(private repositoryFactory: RepositoryFactory
    ){
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository()
        this.pessoaRepository = repositoryFactory.createPessoaRepository()
        this.usuarioRepository = repositoryFactory.createUsuarioRepository()
        this.itemRepository = repositoryFactory.createItemRepository()

    }

    async execute(input: CreateEmprestimoUseCaseInput): Promise<CreateEmprestimoUseCaseOutput>{
        const item = await this.itemRepository.getById(input.id_item)
        const pessoa = await this.pessoaRepository.getById(input.id_pessoa)
        const usuario = await this.usuarioRepository.getById(input.id_usuario)
        
        const emprestimo = new Emprestimo(item, input.dataEmprestimo, pessoa, usuario, input.dataDevolucao)

        await this.emprestimoRepository.create(emprestimo)
        return{};
    }
}