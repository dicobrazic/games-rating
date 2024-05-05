

const fs = require('fs');
// Импортируем модуль path
const path = require('path');

module.exports.readFile = () => {
  const filepath = path.join(__dirname, 'file.txt'); // Собрали абсолютный путь к файлу
  const file = fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
        console.log(data);
    });
};