const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    admin: Boolean,
    firstName: String,
    lastName: String,
    adressMail:String,
    jwt: String,
    password:String
});
const User = mongoose.model('User',userSchema);
//exports.userSchema = userSchema
module.exports = User;