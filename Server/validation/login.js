const validator = require('validator');
//const user  = require('../users/users');
const MongoClient = require('mongodb').MongoClient;


//give request (data) from Client-side and handle
module.exports =  function (data) {
    let errors = {};
    MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
        console.log(1)
        let mydb = db.db('test');
        mydb.collection('users').findOne({}, function (err, result) {
            if (err) throw err;
            username = result.username;
            password = result.password;
            db.close();
        });
    });
    

    if (validator.isEmpty(data.username)) {
        errors.username = 'Username field is required!!'
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'password field is required!!'
    }
    if (!validator.isLength(data.password, { min: 3, max: 30 })) {
        errors.password = 'password must bettween is 3  and 30 characters!'
    }
    if (!validator.equals(data.username, username)) {
        errors.username = 'sai username!!!!'
    }
    if (!validator.equals(data.password, password)) {
        errors.password = 'sai password!!!!'
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}