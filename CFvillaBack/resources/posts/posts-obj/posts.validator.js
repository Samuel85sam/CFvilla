const yup = require("yup");
const { object } = require('yup');
const mongoose = require('mongoose');
//.shape?
const postsValidator = new yup.object({
    type: yup.string().min(2).max(30).required(),
    title: yup.string().min(2).max(30).required(),
    author: yup.string().min(2).max(30).required(),// check user existe en db? 
    body: yup.string().min(2).max(5000).required(),
    img: yup.string().min(2).max(30)// check img existe dans storage?dans db? 
})

//*==> middlwr avec trycatch chck req.body 

module.exports = postsValidator