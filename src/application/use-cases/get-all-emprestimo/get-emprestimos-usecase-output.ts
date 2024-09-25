type ItemOutput = {
    id: string
    name: string
}

type PessoaOutput = {
    id: string
    name: string
}

type usuarioOutput = {
    id: string
    name: string
}

export type GetAllEmprestimoUseCaseOutput = {
    id: string; 
    item: ItemOutput;
    pessoa: PessoaOutput;
    usuario: usuarioOutput;
    dataEmprestimo: string;
    dataDevolucao:string | undefined;
}