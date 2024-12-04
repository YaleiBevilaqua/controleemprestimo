import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateEmprestimoUseCaseInput } from "./update-emprestimo-input";
import { UpdateEmprestimoUseCaseOutput } from "./update-emprestimo-output";

export class UpdateEmprestimoUseCase {

    private emprestimoRepository: EmprestimoRepository
    private itemRepository: ItemRepository;
    private pessoaRepository: PessoaRepository;
    private usuarioRepository: UsuarioRepository;
    constructor(private repositoryFactory: RepositoryFactory) {
        this.emprestimoRepository= this.repositoryFactory.createEmprestimoRepository();
        this.itemRepository = this.repositoryFactory.createItemRepository();
        this.pessoaRepository = this.repositoryFactory.createPessoaRepository();
        this.usuarioRepository = this.repositoryFactory.createUsuarioRepository();
    }

    async execute(input: UpdateEmprestimoUseCaseInput): Promise<UpdateEmprestimoUseCaseOutput>{
        console.log("3")
        if(!input.id){
            throw new Error('falta informaçoes');
        }
        console.log("4")
        const item = await this.itemRepository.getById(input.id_item);
        const pessoa = await this.pessoaRepository.getById(input.id_pessoa);
        const usuario = await this.usuarioRepository.getById(input.id_usuario);

        const novoEmprestimo = new Emprestimo(item, input.dataEmprestimo, pessoa, usuario, input.dataDevolucao);
        console.log("5")
        this.emprestimoRepository.update(novoEmprestimo)
        
        return{}
    }
}