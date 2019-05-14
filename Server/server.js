const express = require('express');
const logger = require('morgan');
const users = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/database'); //database configuration

const app = express();
const dotenv = require('dotenv')

app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json(data);
});

app.use(cors());

//config enviroment
dotenv.config()
const PORT = process.env.PORT || 5000
// public route
app.use('/login', users);
app.use('/api/Studen', users)
// private route
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
// app.use(function (req, res, next) {
//     let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Something looks wrong :( !!!" });
});
app.listen(PORT,  ()=>{
    console.log(`Server listening on port ${PORT}`);
});

