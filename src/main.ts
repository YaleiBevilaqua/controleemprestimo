import { config } from "dotenv";
import express, { request, response } from 'express';
import cors from "cors";
import { ItemController } from './application/controller/item-controller';
import { PostgresConnection } from './domain/infra/database/postgres-connection';
import { ItemTypeRepositoryDatabase } from './domain/infra/repository/database/item-type-repository-database';
import { DatabaseRepositoryFactory } from './domain/infra/database/database-repository-factory';
import { PessoaController } from "./application/controller/pessoa-controller";
import { UsuarioController } from "./application/controller/usuario-controller";
import { EmprestimoController } from "./application/controller/emprestimo-controller";
import { TipoItem } from "./domain/entity/tipo-item";
import { TipoItemController } from "./application/controller/tipoitem-controller";

config();
const app = express();
const corsa = require('cors');
const port = 5000;
app.use(express.json())
app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, access-token');
            next();
        });

app.use(corsa())

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
const tipoItemController = new TipoItemController(repositoryFactory);

//GET ALL

app.get('/items', async(request, response) => {
    response.send(await itemsController.getAll({}));
 });
 app.get('/tipo_items', async(request, response) => {
    response.send(await tipoItemController.getAll({}));
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

//GET BY ID

app.get('/items/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await itemsController.getById(id));
 });

app.get('/pessoas/:id', async (request, response) => {
const id = request.params.id;
response.send(await pessoaController.getById(id));
})

app.get('/usuarios/:id', async (request, response) => {
const id = request.params.id;
response.send(await usuarioController.getById(id));
})

app.get('/emprestimos/:id', async (request, response) => {
const id = request.params.id;
response.send(await emprestimoController.getById(id));
})


app.get('/tipo_items/:id', async(request, response) => {
    const id = request.params.id;
    response.send(await tipoItemController.getById(id))
})

// POST

app.post('/items', async (request, response) => {
    response.send(await itemsController.create(request.body));
});

app.post('/emprestimos', async (request, response) => {
    response.send(await emprestimoController.create(request.body));
});

app.post('/pessoas', async (request, response) => {
    response.send(await pessoaController.create(request.body));
}); 

app.post('/usuarios', async (request, response) => {
    console.log(request.body)
    response.send(await usuarioController.create(request.body));
});

app.post('/tipo_items', async (request, response) => {
    response.send(await tipoItemController.create(request.body));
})

//PUT

app.put('/pessoas/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body
    const novapessoa = {id, ...body}
    response.send(await pessoaController.update(novapessoa));
})

app.put('/usuarios/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body
    const novousuario = {id, ...body}
    response.send(await usuarioController.update(novousuario));
})

app.put('/tipo_items/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body
    const novotipoitem = {id, ...body}
    response.send(await tipoItemController.update(novotipoitem));
})

app.put('/items/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body
    const novoitem = {id, ...body}
    console.log(body)
    response.send(await itemsController.update(novoitem));
})
app.put('/emprestimos/:id', async (request, response)=>{
    const id = request.params.id;
    const body = request.body
    const novoEmprestimo = {id, ...body}
    console.log(novoEmprestimo)
    response.send(await emprestimoController.update(novoEmprestimo));
})


app.listen(5000 , () => {
    console.log("Servidor iniciado na porta 5000")
})