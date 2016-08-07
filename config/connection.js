/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    },
    jawsDB: {
//        port: 3306,
//        host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//        user: 'sb6zzi8zxdngt7ti',
//        password: "zue5z34b1sm8z1o8",
//       database: "d0kpm27018eyh37y" 
    }
};

var connection = mysql.createConnection(process.env.JAWSDB_URL || source.localhost);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
