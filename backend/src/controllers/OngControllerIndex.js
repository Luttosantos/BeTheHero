
const connection = require('../database/connections');
const crypto = require('crypto');

module.exports ={
    
async index(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
    
    }
};