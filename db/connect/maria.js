const maria = require('mysql');

const conn = maria.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'wanted',
  password: 'Qwer1234!',
  database: 'WANTED'
});

module.exports = conn;