const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    admin: Boolean,
    firstName: String,
    lastName: String,
    jwt: String,
    password:String
});

const User = mongoose.model('User',userSchema);

module.exports = User;