import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { PessoaController } from './application/controller/pessoa-controller';
import { PessoaRepositoryMemory, PessoaRepositoryMemory } from './infra/repository/memory/pessoa-repository-memory';

const app = express();
const port = 3333;
app.use(express.json())

const itemRepositoryMemory = new ItemRepositoryMemory()

const pessoaRepositoryMemory = new PessoaRepositoryMemory()

const itemsController = new ItemController(itemRepositoryMemory)

const pessoaController = new PessoaController(pessoaRepositoryMemory)

app.get('/items', (request, response) => {
    response.send(itemsController.getAll({}));
});

app.post('/items', (request, response) => {
    response.send(itemsController.create(request.body));
});

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})

app.get('/pessoas', (request, response) => {
    response.send(pessoaController.getAll({}));
});