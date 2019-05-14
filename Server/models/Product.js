const mongoose = require('mongoose');


//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender:{
        type: String
    }
});


module.exports = mongoose.model('Studen', UserSchema, 'Students');