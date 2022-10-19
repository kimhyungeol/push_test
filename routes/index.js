var express = require('express');
var router = express.Router();
var template = require('../views/index')
var sign = require('../views/sign.js')
const mysql = require('mysql');
const db = require('../mysql.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  var html = template.HTML();
  res.send(html);
});
router.get('/login', function(req, res, next) {
  var html = sign.signon();
  res.send(html);
});

router.get('/registe', function(req, res, next) {
  res.send(sign.register());
});

router.post('/create_id', function(req, res, next) {
  var post = req.body;
  db.query(`
  INSERT INTO userdata(id,pw,name,phone)
  VALUES(?,?,?,?)`,
  [post.id,post.password,post.nikename,post.phone],
  function(error, result){
    if(error){
      res.send(error);
    }
    res.writeHead(302, {Location: `/`});   
    res.send();
  }
  )
  
});

module.exports = router;

