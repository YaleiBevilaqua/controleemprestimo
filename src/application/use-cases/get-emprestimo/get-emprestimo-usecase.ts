import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetEmprestimoUseCaseInput } from "./get-emprestimo-usecase-input";
import { GetEmprestimoUseCaseOutput } from "./get-emprestimo-usecase-output";

export class GetEmprestimoUseCase{
    private emprestimoRepository: EmprestimoRepository;
    constructor(readonly repositoryFactory: RepositoryFactory){
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }

    async execute(input: GetEmprestimoUseCaseInput): Promise<GetEmprestimoUseCaseOutput>{
        const emprestimo = await this.emprestimoRepository.getById(input.id)

        return{
            id: emprestimo.getId(),
                item: {
                    id: emprestimo.getItem().getId(),
                    name: emprestimo.getItem().getName(),
                    itemType: {
                        id: emprestimo.getItem().getTipoItem().getId(),
                        name: emprestimo.getItem().getTipoItem().getName(),
                    }
                },
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
                dataEmprestimo: emprestimo.getDataEmprestimo().toISOString(),
                dataDevolucao: emprestimo.getDataDevolucao()?.toISOString()

        }

    }
}
    