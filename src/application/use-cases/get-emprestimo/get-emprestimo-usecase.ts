import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimoUseCaseInput } from "./get-emprestimo-usecase-input";
import { GetEmprestimoUseCaseOutput } from "./get-emprestimo-usecase-output";

export class GetEmprestimoUseCase{
    constructor(private readonly emprestimoRepository: EmprestimoRepository){}

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
                usuario: {
                    id: emprestimo.getUsuario().getId(),
                    username: emprestimo.getUsuario().getUsername(),
                    password: emprestimo.getUsuario().getPassword(),
                    colaborador: {
                        id: emprestimo.getUsuario().getPessoa().getId(),
                        name: emprestimo.getUsuario().getPessoa().getName(),
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
    