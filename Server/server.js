const express = require('express');
const logger = require('morgan');
const users = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/database'); //database configuration

var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();
app.set('secretKey', 'nodeRestApi'); // jwt secret token


//config enviroment
dotenv.config()
const PORT = process.env.PORT || 5000

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.json());


app.use(cors());

// public route
app.use('/login', users);
app.use('/api/Studen', users)

// private route
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});
//run server
app.listen(PORT,  ()=>{
    console.log(`Server listening on port ${PORT}`);
});

