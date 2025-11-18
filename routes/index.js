var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Jordan 1 low Travis Scott*/
router.get('/jordan1', function(req, res, next) {
    res.send("<h1>Страница Jordan 1 low Travis Scott</h1>")
});

/* Страница Air Force 1 low */
router.get('/force1', function(req, res, next) {
    res.send("<h1>Страница Air Force 1 low</h1>")
});

/* Страница Air Force 1 Off White */
router.get('/offwhite', function(req, res, next) {
    res.send("<h1>Страница Air Force 1 Off White</h1>")
});

module.exports = router;
