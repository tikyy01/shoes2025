const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const sneakerSchema = new mongoose.Schema({ 
  name: String 
});

sneakerSchema.methods.show = function () {
  console.log(`${this.name} — в магазине прямо сейчас!`);
};

const Sneaker = mongoose.model('Shoes', sneakerSchema);

const airForce = new Sneaker({ name: 'air force' });

airForce.save().then(() => {
  console.log('Кроссовок успешно сохранён!');
  airForce.show();  // ← вот здесь сработает наш метод
});