const express = require('express');
const {dbConfig}    = require('./db');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());


let connection;
async function ConectarDB() {
    try {
        connection = await mysql.createConnection(dbConfig);    
        console.log('Connected to MySQL database.');
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    }
}
    ConectarDB();
app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Example route to fetch data from MySQL database
