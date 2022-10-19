var express = require('express');
var router = express.Router();
var template = require('../views/index.js')
var sign = require('../views/sign.js')
/* GET users listing. */
router.get('/board', function(req, res, next) {
  var html = template.HTML(`<a href="/page/create">create</a>`);
  res.send('respond with a 게시판');
});

router.get('/song', function(req, res, next) {
  res.send('respond with a song');
});

router.get('/ann', function(req, res, next) {
  res.send('respond with a 공지');
});

router.get('/contens', function(req, res, next) {
  res.send('respond with a 콘텐츠');
});
module.exports = router;
