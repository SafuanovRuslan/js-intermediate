const fs = require('fs');

fs.readFile('./data.json', 'utf-8', (err, data) => {
  const obj = JSON.parse(data);
  obj.third = 'THREE';

  fs.writeFile('./data.json', JSON.stringify(obj), (err) => {

  })
});