const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
};

module.exports = { dbConfig };
