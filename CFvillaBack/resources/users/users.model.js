const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    type: String,
    firstName: String,
    lastName: String,
    jwt: String
});

const User = mongoose.model('User',postSchema);

module.exports = User;