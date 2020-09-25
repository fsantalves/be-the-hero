const knex = require('knex');
const configuration = require('../../knexfile');

const conncection = knex(configuration.development);

module.exports = conncection;