import { Pessoa } from "../../../domain/entity/pessoa"

export type CreateUsuarioUseCaseInput = {
    id: string
    id_pessoa: string
    username: string
    password: string

}