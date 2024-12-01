import { Pessoa } from "../../../domain/entity/pessoa"

export type CreateUsuarioUseCaseInput = {
    id: string
    username: string
    password: string
    pessoaId: string;
}