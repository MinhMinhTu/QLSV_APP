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

app.listen(PORT,  ()=>{
    console.log(`Server listening on port ${PORT}`);
});

