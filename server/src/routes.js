module.exports = (app) => {
    app.post('/register' , (req , res) => {
        res.send({
            message: `hello ${(req.body.email === req.body.password ? req.body.email : 'avi')}, your name is registered!`
        })
    })
}
