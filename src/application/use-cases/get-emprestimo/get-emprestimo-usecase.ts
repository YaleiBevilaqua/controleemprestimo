import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimoUseCaseInput } from "./get-emprestimo-usecase-input";
import { GetEmprestimoUseCaseOutput } from "./get-emprestimo-usecase-output";

export class GetEmprestimoUseCase{
    constructor(private readonly emprestimoRepository: EmprestimoRepository){}

    execute(input: GetEmprestimoUseCaseInput): GetEmprestimoUseCaseOutput{
        const emprestimo = this.emprestimoRepository.getById(input.id)

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
                usuario: {
                    id: emprestimo.getUsuario().getId(),
                    username: emprestimo.getUsuario().getUsername(),
                    password: emprestimo.getUsuario().getPassword(),
                    colaborador: {
                        id: emprestimo.getUsuario().getColaborador().getId(),
                        name: emprestimo.getUsuario().getColaborador().getName(),
                    }
            },
                pessoa: {
                    id: emprestimo.getPessoa().getId(),
                    name: emprestimo.getPessoa().getName(),
            },

                dataEmprestimo: emprestimo.getDataEmprestimo().toISOString(),
                dataDevolucao: emprestimo.getDataDevolucao()?.toISOString(),

        }

    }
}
    