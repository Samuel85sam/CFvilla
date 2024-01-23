const yup = require("yup");
const { object } = require('yup');

const postsValidator = object({
    title: yup.string().min(2).max(30).required(),
    body: yup.string().min(2).max(5000).required()
})


module.exports = postsValidator