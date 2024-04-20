const {createPool} = require('mysql2/promise');
const {DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_DATABASE} = require('./config');

const conectionDatabase = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,    
    port: DB_PORT,  
    database: DB_DATABASE
});

module.exports = conectionDatabase;
