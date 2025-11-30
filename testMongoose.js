const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const sneaker = mongoose.model('Shoes', { name: String });


const airForce = new sneaker({ name: 'air force' });
airForce.save().then(() => console.log('Кроссовок успешно сохранён!)'));