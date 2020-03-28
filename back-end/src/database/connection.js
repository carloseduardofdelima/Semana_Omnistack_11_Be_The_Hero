//Cria a conexão com o banco, cada rota utiliza ele
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;