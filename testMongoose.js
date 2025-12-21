const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


var Shoes = require('./models/shoes.js').Shoes



var shoes = new Shoes({
   title: "Jordan 1 low Travis Scott",
   nick: "jordan1",

})




shoes.save();
