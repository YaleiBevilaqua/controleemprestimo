import { Item } from "../../../domain/entity/item"
import { Pessoa } from "../../../domain/entity/pessoa"
import { Usuario } from "../../../domain/entity/usuario"

export type CreateEmprestimoUseCaseInput = {
    id_item: string
    dataEmprestimo: Date
    dataDevolucao: string | undefined
    id_pessoa: string
    id_usuario: string
}