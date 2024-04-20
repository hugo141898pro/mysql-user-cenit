const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/users', require('./router/user.routes'));

app.use((req, res) => {
    res.status(404).json({
        message: 'no se encontro la paguina'
    })
})

module.exports = app;