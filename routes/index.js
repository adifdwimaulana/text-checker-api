var express = require('express');
var router = express.Router();
const wordController = require('../controller').word;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Word Router */
router.get('/api/word/list', wordController.list);
router.post('/api/word/search', wordController.searchPartial);

module.exports = router;
