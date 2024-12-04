export type UpdateEmprestimoUseCaseInput = {
    id: string;
    id_item: string
    dataEmprestimo: Date
    dataDevolucao: string | undefined
    id_pessoa: string
    id_usuario: string
}
