type PessoaOutput = {
    id: string;
    name: string
}

export type GetAllUsuarioUseCaseOutput = {
    id: string;
    username: string;
    password:string;
    pessoa: PessoaOutput
}