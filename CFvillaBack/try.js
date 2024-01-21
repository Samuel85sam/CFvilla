

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




const yup = require("yup");
const { object } = require('yup');
const mongoose = require('./posts.model')

//.shape?
const postsValidator = object({
    type: yup.string().min(2).max(30).required(),
    title: yup.string().min(2).max(30).required(),
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: yup.string().min(2).max(5000).required(),
    img: { type: mongoose.Types.ObjectId, ref: 'Img' }
})


module.exports = postsValidator



C:\Users\samue\Desktop\CFvilla\cfvillaback\resources\posts\obj.posts\posts.validator.js:9
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                                    ^

TypeError: Cannot read properties of undefined (reading 'Types')
    at Object.<anonymous> (C:\Users\samue\Desktop\CFvilla\cfvillaback\resources\posts\obj.posts\posts.validator.js:9:37)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Module.require (node:internal/modules/cjs/loader:1143:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at Object.<anonymous> (C:\Users\samue\Desktop\CFvilla\cfvillaback\resources\posts\obj.posts\posts.controller.js:3:24)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)