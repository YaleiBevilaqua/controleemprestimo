import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetAllEmprestimoUseCaseInput } from "./get-emprestimos-usecase-input";
import { GetAllEmprestimoUseCaseOutput } from "./get-emprestimos-usecase-output";

export class GetEmprestimosUseCase{
    constructor(private readonly emprestimoRepository: EmprestimoRepository){}

    execute(input: GetAllEmprestimoUseCaseInput): GetAllEmprestimoUseCaseOutput[]{
        const listadeEmprestimos =this.emprestimoRepository.getAll();

        const output: GetAllEmprestimoUseCaseOutput[]=[];

        for (const emprestimo of listadeEmprestimos){
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
                pessoa: {
                    id: emprestimo.getPessoa().getId(),
                    name: emprestimo.getPessoa().getName()
                },
                usuario: {
                    id: emprestimo.getUsuario().getId(),
                    name: emprestimo.getUsuario().getUsername(),
                    colaborador: {
                        id: emprestimo.getUsuario().getColaborador().getId(),
                        name: emprestimo.getUsuario().getColaborador().getName(),
                    }
                },
                dataEmprestimo: emprestimo.getDataEmprestimo().toISOString(),
                dataDevolucao: emprestimo.getDataDevolucao()?.toISOString()



                }
            )
        }
    
        return output;
    }
}