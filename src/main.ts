import { config } from "dotenv";
import express, { request, response } from 'express';
import { ItemController } from './application/controller/item-controller';
import { PostgresConnection } from './domain/infra/database/postgres-connection';
import { ItemTypeRepositoryDatabase } from './domain/infra/repository/database/item-type-repository-database';
import { DatabaseRepositoryFactory } from './domain/infra/database/database-repository-factory';
import { PessoaController } from "./application/controller/pessoa-controller";
import { UsuarioController } from "./application/controller/usuario-controller";
import { EmprestimoController } from "./application/controller/emprestimo-controller";

config();
const app = express();
const port = 3000;
app.use(express.json())
app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, access-token');
            next();
        });

const dadosconexao = {
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'dev@123',
    database: process.env.DB_DATABASE || 'cleber',
    host: process.env.DB_HOST || '159.89.46.66',
    port: process.env.DB_PORT || '5432'
}

console.log(dadosconexao)
const connectionPostgreSQL = new PostgresConnection(
    dadosconexao
);
const repositoryFactory = new DatabaseRepositoryFactory(connectionPostgreSQL);

const itemsController = new ItemController(repositoryFactory);
const pessoaController = new PessoaController(repositoryFactory);
const usuarioController = new UsuarioController(repositoryFactory);
const emprestimoController= new EmprestimoController(repositoryFactory);

app.get('/items', async(request, response) => {
    response.send(await itemsController.getAll({}));
 });
 app.get('/Tipo_items', async(request, response) => {
    response.send(await itemsController.getAll({}));
 });

 app.get('/pessoas', async (request, response)=>{
    response.send(await pessoaController.getAll({}))
 });

app.get('/usuarios', async (request, response) => {
    response.send(await usuarioController.getAll({}))
})

app.get('/emprestimos', async(request, response) => {
    response.send(await emprestimoController.getAll({}))
    })



// app.get('/items/:id', async (request, response) => {
//     const id = request.params.id;
//     response.send(await itemsController.getById(id));
// });

//app.delete('/items/:id', (request, response) => {
//    const id = request.params.id;
//    response.send(itemsController.delete(id));
//});

// app.put('/items/:id', (request, response) => {
//     const id = request.params.id;
//     const body = request.body;
//     response.send(itemsController.update({
//         id,
//         ...body
//     }));
// });

app.post('/items',async (request, response) => {
    response.send(await itemsController.create(request.body));
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
})