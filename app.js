var app = require('./config/server')

var rotaHome = require('./app/routes/home')(app);

var rotaContato = require('./app/routes/contato')(app);

var rotaView = require('./app/routes/view')(app);

app.listen(3001, () => {
    console.log("Servidor rodando com o express");
})
