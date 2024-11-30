
import { ItemRepository } from "../../repository/item-repository";
import { ItemTypeRepository } from "../../repository/item-type-repository";
import { PessoaRepository } from "../../repository/pessoa-repository";
import { RepositoryFactory } from "../../repository/repository-factory";
import { UsuarioRepository } from "../../repository/usuario-repository";
import ItemRepositoryDatabase from "../repository/database/item-repository-database";
import { ItemTypeRepositoryDatabase } from "../repository/database/item-type-repository-database";
import { PessoaRepositoryDatabase } from "../repository/database/pessoa-repository-database";
import { UsuarioRepositoryDatabase } from "../repository/database/usuario-repository-database";
import { Connection } from "./connection";

export class DatabaseRepositoryFactory implements RepositoryFactory{
    constructor(private connection: Connection) {
    }
    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection);
    }
    createItemTypeRepository(): ItemTypeRepository {
        return new ItemTypeRepositoryDatabase(this.connection);
    }
    createPessoaRepository(): PessoaRepository{
        return new PessoaRepositoryDatabase(this.connection);
    }

    createUsuarioRepository(): UsuarioRepository {
        return new UsuarioRepositoryDatabase(this.connection);
    }
}