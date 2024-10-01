type pessoa = {
    id: string;
    name: string;
}

export type GetUsuarioUseCaseOutput = {
    id: string;
    username: string;
    password: string;
    colaborador: pessoa;
}