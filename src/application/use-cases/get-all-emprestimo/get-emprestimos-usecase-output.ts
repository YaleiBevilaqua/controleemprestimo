type colaboradorOutput = {
    id: string
    name: string
}

type itemType = {
    id: string
    name: string
}

type ItemOutput = {
    id: string
    name: string
    itemType: itemType
}

type PessoaOutput = {
    id: string
    name: string
}

type usuarioOutput = {
    id: string
    name: string
    colaborador: colaboradorOutput
}

export type GetAllEmprestimoUseCaseOutput = {
    id: string; 
    item: ItemOutput;
    pessoa: PessoaOutput;
    usuario: usuarioOutput;
    dataEmprestimo: string;
    dataDevolucao: string | undefined;
}