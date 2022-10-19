const mysql = require("mysql");


var connection = mysql.createConnection({
    host     : '192.168.1.100', //실제로 연결할 데이터베이스의 위치
    user     : 'express',
    password : 'admin',
    database : 'userdata' //데이터베이스 이름
  });

  module.exports = connection;