import { Item } from "../../../domain/entity/item"
import { Pessoa } from "../../../domain/entity/pessoa"
import { Usuario } from "../../../domain/entity/usuario"

export type CreateEmprestimoUseCaseInput = {
    id: string
    item: Item
    dataEmprestimo: Date
    dataDevolucao: Date | undefined
    pessoa: Pessoa
    usuario: Usuario
}