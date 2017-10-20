var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/view', (req, res) => {
    res.render('viewtest.ejs')
})

app.get('/home', (req, res) => {
    res.render('home/index')
})

app.get('/', (req, res) => {
    res.send('<html><body>teste</body></html>');
})

app.get('/contato', (req, res) => {
    res.send('<html><body>meu componente de contato</body></html>');
})

app.listen(3001, () => {
    console.log("Servidor rodando com o express");
})
