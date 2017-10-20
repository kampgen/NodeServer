var http = require('http');

var server = http.createServer(function(req, res) {

    var url = req.url;

    switch (url) {
        case "/":
        res.end("<html><body>teste</body></html>")
            break;
        case "/home":
        res.end("<html><body>home</body></html>")
            break;
        case "/contato":
        res.end("<html><body>contato</body></html>")
            break;
        default:
        res.end("<html><body>url invalido</body></html>")
    }
});

server.listen(3001);
