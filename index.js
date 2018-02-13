const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const app = express();

app.use(bodyParser.json());
/*
Создать приложение на Express.js которое будет иметь 5 вариаций роутов:

GET / – Главная страница которая вернет код 200 OK и покажет текст "Hello, Express.js"
GET /hello – Страница, код ответа 200 OK и покажет текст "Hello stranger!"
GET /hello/[любое имя] – Страница, код ответа 200 OK и покажет текст "Hello, [любое имя]!"
ANY /sub/[что угодно]/[возможно даже так] – Любая из этих страниц должна показать текст "You requested URI: [полный URI запроса]"
POST /post – Страница которая вернет все тело POST запроса (POST body) в JSON формате, либо 404 Not Found - если нет тела запроса
*/

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js</h1>');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello stranger!</h1>');
});

app.get('/hello/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

app.all('/sub/*', (req, res) => {
    const fullURL = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });
    res.send(`<p>You requested URI: ${fullURL}</p>`);
});

app.post('/post', (req, res) => {
    console.log(req.body);
    if (!req.body || Object.keys(req.body).length == 0) {
        res.status(404);
        res.end();
        return;
    }
    res.json(req.body);
});

app.listen(3000, () => { console.log("Server started") });