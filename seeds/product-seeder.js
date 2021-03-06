var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://heroku_jnq5gcwg:augiuuk0t0lsaqla5e3kffa17k@ds155587.mlab.com:55587/heroku_jnq5gcwg');

var products = [
    new Product({
        imagePath: 'https://i.pinimg.com/736x/25/2a/46/252a468c5a423a750167dbd424571310--paint-sample-art-paint-swatch-art.jpg',
        title: 'Color Crystals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 97
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/b2/97/50/b29750d569c9e8516af1c2a357ad1af4.jpg',
        title: 'Rainbow Diamonds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 453
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/736x/25/2a/46/252a468c5a423a750167dbd424571310--paint-sample-art-paint-swatch-art.jpg',
        title: 'Paint Shore',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 654
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/b2/97/50/b29750d569c9e8516af1c2a357ad1af4.jpg',
        title: 'Color Storm',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 345
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/736x/25/2a/46/252a468c5a423a750167dbd424571310--paint-sample-art-paint-swatch-art.jpg',
        title: 'Sunny Ocean',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 399
    }),

    new Product({
        imagePath: 'https://i.pinimg.com/originals/b2/97/50/b29750d569c9e8516af1c2a357ad1af4.jpg',
        title: 'Color Compass',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 135
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}