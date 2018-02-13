const express = require('express');
const app = express();

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

app.listen(3000, () => { console.log("Server started") });