type itemType = {
    id: string
    name: string
}

type itemOutput = {
    id: string
    name: string
    itemType: itemType
}

type pessoaOutput = {
    id: string
    name: string
    documento: string
}

type usuarioOutput = {
    id: string
    name: string
    password: string
    pessoa: pessoaOutput
}

export type GetAllEmprestimoUseCaseOutput = {
    id: string | undefined; 
    item: itemOutput;
    pessoa: pessoaOutput;
    usuario: usuarioOutput;
    dataEmprestimo: string;
    dataDevolucao: string | undefined;
}