const yup = require("yup");
const { object } = require('yup');
const Img = require("../posts-img/img.model");

const postsValidator = object({
    type: yup.string().required(),
    title: yup.string().required(),
    author: yup.string(),
    body: yup.string().required(),
    img: yup.object(Img)
})


module.exports = postsValidator