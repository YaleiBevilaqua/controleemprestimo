import { ItemRepository } from "../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import ItemRepositoryDatabase from "../repository/database/item-repository-database";
import { ItemTypeRepositoryDatabase } from "../repository/database/item-type-repository-database";
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

}