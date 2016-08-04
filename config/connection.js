// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    },
}

var connection = mysql.createConnection(source.jawsDB);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;