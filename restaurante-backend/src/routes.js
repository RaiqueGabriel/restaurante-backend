const express = require('express');
// const crypto = require('crypto');

const produtos = require('./controllers/produtos');

const routes = express.Router();

routes.get('/', produtos.list);

// USEI APENAS PARA POPULAR MINHA TABELA
// routes.get('/popula', async (request, response) => {
//     // const { name, value} = request.body;

//     const id = crypto.randomBytes(4).toString('HEX');

//     await connection('produtos').insert({
//         id: id,
//         name: 'suco',
//         value: 5.00
//     });

//     return response.send("Tabela populada");
    
// });

module.exports = routes;