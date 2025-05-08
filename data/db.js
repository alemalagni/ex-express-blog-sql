const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pizzeria'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connnected to MySQL!');
});

module.exports = connection;