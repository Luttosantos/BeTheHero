const knex = require('knex');
const configuration = require('../../Knexfile');

const connection = knex(configuration.development);
module.exports = connection;