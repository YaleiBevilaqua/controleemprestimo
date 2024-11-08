mport { config } from "dotenv";
import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { ItemTypeRepositoryMemory } ;
import ItemRepositoryDatabase from './domain/infra/repository/database/item-repository-database';
import { PostgresConnection } from './domain/infra/database/postgres-connection';
import { ItemTypeRepositoryDatabase } from './domain/infra/repository/database/item-type-repository-database';
import { DatabaseRepositoryFactory } from './domain/infra/database/database-repository-factory';

config();
const app = express();
const port = 3005;
app.use(express.json())
app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, access-token');
            next();
        });

const dadosconexao = {
    user: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || ''
}

console.log(dadosconexao)
const connectionPostgreSQL = new PostgresConnection(
    dadosconexao
);
const repositoryFactory = new DatabaseRepositoryFactory(connectionPostgreSQL);

const itemsController = new ItemController(repositoryFactory);

app.get('/items', async(request, response) => {
    response.send(await itemsController.getAll({}));
});

app.get('/items/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await itemsController.getById(id));
});

app.delete('/items/:id', (request, response) => {
    const id = request.params.id;
    response.send(itemsController.delete(id));
});

app.put('/items/:id', (request, response) => {
    const id = request.params.id;
    const body = request.body;
    response.send(itemsController.update({
        id,
        ...body
    }));
});

app.post('/items',async (request, response) => {
    response.send(await itemsController.create(request.body));
});

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})