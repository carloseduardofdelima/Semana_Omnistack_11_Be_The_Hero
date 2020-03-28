const express = require('express');
const cors = require('cors');



const app = express();

//Importando as rotas
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Metodos HTTP:
 *
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Usar apenas o GET funciona, nomear métodos diferentes é apenas
 * para organização
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) 
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * Tipos de Banco de Dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle..
 * NoSQL: MongoDB, CouchDB, etc.
 * 
 * Driver: SELECT * from users
 * Query Builder: faz consultas através de Javascript
 * EX: table('users').select('*').where()
 * 
 */

app.listen(4000, () => {
    console.log('escutando na porta 4000');
});