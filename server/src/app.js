const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register' , (req , res) => {
    res.send({
        message: `hello ${(req.body.email === req.body.password ? req.body.email : 'avi')}, your name is registered!`
    })
})

app.listen(process.env.PORT || 8081)
