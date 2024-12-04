import { Pessoa } from "../../../domain/entity/pessoa"

export type CreateUsuarioUseCaseInput = {
    id_pessoa: string
    username: string
    password: string

}