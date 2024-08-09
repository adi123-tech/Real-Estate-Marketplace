const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Name : String,
    Age : Number
});

module.exports = mongoose.model('SignUp',User);