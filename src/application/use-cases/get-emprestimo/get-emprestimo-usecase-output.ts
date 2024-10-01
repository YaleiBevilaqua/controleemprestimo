type colaborador ={
    id: string;
    name: string;
}

type itemType = {
    id: string;
    name: string;
}

type item = {
    id: string;
    name: string;
    itemType: itemType;
}

type pessoa = {
    id: string;
    name: string;
}

type usuario = {
    id: string;
    username: string;
    password: string;
    colaborador: colaborador;
}

export type GetEmprestimoUseCaseOutput = {
    id: string | undefined;
    item: item;
    dataEmprestimo: string;
    dataDevolucao: string | undefined;
    pessoa: pessoa;
    usuario: usuario;
}