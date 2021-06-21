const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(express.static('.'));
app.use(cors());

app.listen(3000, function() {
  console.log('server is running on port 3000!');
});

app.get('/catalog', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
      res.send(data);
    });
});

app.get('/cart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
      res.send(data);
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('stats.json', 'utf8', (err, data) => {
        const log = JSON.parse(data);
        const item = `Пользователь добавил в корзину товар с id=${JSON.parse(req.body)}`;
        
        log.push(item);
    
        fs.writeFile('stats.json', JSON.stringify(log), (err) => {});   
    });

    fs.readFile('cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const item = JSON.parse(req.body);
        
        cart.push(item);
    
        fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
            if (err) {
              res.send(`{"result": 0}`);
            } else {
              res.send(JSON.stringify(cart));
            }
        });   
    });    
});

app.post('/removeFromCart', (req, res) => {
    fs.readFile('stats.json', 'utf8', (err, data) => {
        const log = JSON.parse(data);
        const item = `Пользователь удалил из корзины товар с id=${JSON.parse(req.body)}`;
        
        log.push(item);
    
        fs.writeFile('stats.json', JSON.stringify(log), (err) => {});   
    });

    fs.readFile('cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const item = JSON.parse(req.body);

        let id = cart.indexOf(item);
        cart.splice(id, 1);
    
        fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
            if (err) {
              res.send(`{"result": 0}`);
            } else {
              res.send(JSON.stringify(cart));
            }
        });   
    });    
});