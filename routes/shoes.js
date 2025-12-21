var express = require('express');
var router = express.Router();
var Shoes = require('../models/shoes').Shoes;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с shoes');
});

/* Страница кроссовок */
router.get("/:nick", async function(req, res, next) {
   var shoeses = await Shoes.find({nick: req.params.nick});
   console.log(shoeses)
   if(!shoeses.length) return next(new Error("Нет такого кроссовка в нашем магазине"))
       var shoes = shoeses[0];
       res.render('shoeses', {
           title: shoes.title,
           picture: shoes.avatar,
           desc: shoes.desc
       })
});


module.exports = router;
