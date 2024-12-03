import { Item } from "../../../domain/entity/item"
import { Pessoa } from "../../../domain/entity/pessoa"
import { Usuario } from "../../../domain/entity/usuario"

export type CreateEmprestimoUseCaseInput = {
    id: string
    id_item: Item
    dataEmprestimo: Date
    dataDevolucao: Date | undefined
    id_pessoa: Pessoa
    id_usuario: Usuario
}