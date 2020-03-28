//Arquivo voltado apenas para as rotas
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


//Criando um login para a ong
routes.post('/sessions', SessionController.create);

//Retorna todas as ongs cadastradas
routes.get('/ongs', OngController.list);
//O que vem após a barra é chamado de recurso
//Cadastro de uma nova ong, por isso utilizando o post
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.listForOng);

module.exports = routes;
