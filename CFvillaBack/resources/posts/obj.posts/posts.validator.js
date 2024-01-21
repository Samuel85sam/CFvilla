const yup = require("yup");
const { object } = require('yup');
const mongoose = require('mongoose');
//.shape?
const postsValidator = new yup.object({
    type: yup.string().min(2).max(30).required(),
    title: yup.string().min(2).max(30).required(),
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    body: yup.string().min(2).max(5000).required(),
    img: { type: mongoose.Types.ObjectId, ref: 'Img' }
})


module.exports = postsValidator