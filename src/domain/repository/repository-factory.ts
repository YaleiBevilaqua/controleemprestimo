import { EmprestimoRepository } from "./emprestimo-repository";
import { ItemRepository } from "./item-repository";
import { ItemTypeRepository } from "./item-type-repository";
import { PessoaRepository } from "./pessoa-repository";
import { UsuarioRepository } from "./usuario-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository
    createItemTypeRepository(): ItemTypeRepository;
    createPessoaRepository(): PessoaRepository;
    createUsuarioRepository(): UsuarioRepository;
    createEmprestimoRepository(): EmprestimoRepository;
}