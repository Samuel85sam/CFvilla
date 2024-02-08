const yup = require("yup");
const { object } = require('yup');
const Img = require("../posts-img/img.model");

const postsValidator = object({
    type: yup.string().required(),
    title: yup.string().required(),
    author: yup.object() | yup.string().required(),
    body: yup.string().required(),
    img: yup.object()
})


module.exports = postsValidator