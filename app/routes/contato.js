module.exports = function(app) {
    app.get('/contato', (req, res) => {
        res.send('<html><body>meu componente de contato</body></html>');
    })
}
