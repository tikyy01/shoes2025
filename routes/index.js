var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Jordan 1 low Travis Scott */
router.get('/jordan1', function(req, res, next) {
    res.render('shoeses', {
        title: "Jordan 1 low Travis Scott",
        picture: "images/jordan1.jpg",
        desc: "Культовая баскетбольная модель Nike, выпущенная в 1985 году. Легендарный силуэт, популярный в уличной моде и кроссовочной культуре."
    });
});

/* Страница Air Force 1 low */
router.get('/airforce', function(req, res, next) {
    res.render('shoeses', {
        title: " Air Force 1 low",
        picture: "images/airforce.jpg",
        desc: "Легендарные кроссовки 1982 года. Первые Nike с технологией Air. Белая расцветка White on White стала иконой уличного стиля и хип-хоп культуры."
    });
});



/* Страница Air Force 1 Off White */
router.get('/offwhite', function(req, res, next) {
    res.render('shoeses', {
        title: " Air Force 1 Off White",
        picture: "images/offwhite.jpg",
        desc: "Коллаборация Nike и Вирджила Абло. Деконструкция, фирменные кавычки, яркие бирки. Икона уличной моды и коллекционная ценность."
    });
});

module.exports = router;
