module.exports = function(app) {
    app.get('/view', (req, res) => {
        res.render('viewtest.ejs')
    })
}
