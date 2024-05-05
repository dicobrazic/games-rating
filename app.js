const http = require('http');
const fs = require('fs');
const { readFile } = require('./files/read-file');
const staticFile = require('./appModules/http-utils/static-file')
const path = require('path');
const mimeTypes = require('./appModules/http-utils/mime-types');
const {mainRouteController} = require('./controllers/main')
const {defaultRouteController} = require('./controllers/default')
const {gameRouteController} = require('./controllers/game')
const {voteRouteController} = require('./controllers/vote')
readFile();
const server = http.createServer((req, res) => {

    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
    }

    /* res.writeHead(200, {
         // Установи подходящий для HTML заголовок (обрати внимание на дефис, в заголовке он нужен)
         'Content-Type': 'text/html; charset=utf-8'
     });*/
    // В методе end тоже можно передать данные, в том числе HTML-строку
});

server.listen(3005); 