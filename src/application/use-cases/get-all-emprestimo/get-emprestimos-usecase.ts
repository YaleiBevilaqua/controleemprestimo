import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllEmprestimoUseCaseInput } from "./get-emprestimos-usecase-input";
import { GetAllEmprestimoUseCaseOutput } from "./get-emprestimos-usecase-output";

export class GetAllEmprestimosUseCase{
    private emprestimoRepository: EmprestimoRepository
    constructor(readonly repositoryFactory: RepositoryFactory){
        this.emprestimoRepository= repositoryFactory.createEmprestimoRepository()
        }

    async execute(input: GetAllEmprestimoUseCaseInput): Promise<GetAllEmprestimoUseCaseOutput[]> {
        const listaDeEmprestimos = await this.emprestimoRepository.getAll();

        const output: GetAllEmprestimoUseCaseOutput[]=[];
        

        for (const emprestimo of listaDeEmprestimos){
            console.log(emprestimo.getUsuario(), 'usuarios')
            output.push(
                {
                id: emprestimo.getId(),
                item: {
                    id: emprestimo.getItem().getId(),
                    name: emprestimo.getItem().getName(),
                    itemType: {
                        id: emprestimo.getItem().getTipoItem().getId(),
                        name: emprestimo.getItem().getTipoItem().getName(),
                    }
                },
                dataEmprestimo: emprestimo.getDataEmprestimo().toISOString(),
                pessoa: {
                    id: emprestimo.getPessoa().getId(),
                    name: emprestimo.getPessoa().getName(),
                    documento: emprestimo.getPessoa().getDocumento()
                },
                usuario: {
                    id: emprestimo.getUsuario().getId(),
                    name: emprestimo.getUsuario().getUsername(),
                    password: emprestimo.getUsuario().getPassword(),
                    pessoa: {
                        id: emprestimo.getUsuario().getPessoa().getId(),
                        name: emprestimo.getUsuario().getPessoa().getName(),
                        documento: emprestimo.getUsuario().getPessoa().getDocumento()
                    }
                },
                dataDevolucao: emprestimo.getDataDevolucao()
                }
            )
        }
    
        return output;
    }
}