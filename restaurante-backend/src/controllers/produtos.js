const connection = require('../database/connection');

module.exports = {
    async list( request, response) {
        const produtos = await connection('produtos').select('*');

        return response.json(produtos);
    }
    
}