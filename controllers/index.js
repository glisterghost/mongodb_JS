var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/actors', require('./actors'));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build.index.html'));
  res.json({data: 'Hello!'});
});

module.exports = router;
