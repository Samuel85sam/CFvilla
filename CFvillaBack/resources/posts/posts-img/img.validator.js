const yup = require("yup");
const { object } = require('yup');

const imgValidator = object({
    originalName: yup.string().required(),
    fileName: yup.string().required(),
    type: yup.string().required(),
    path: yup.string().required(),
    size: yup.number().required() 
  })
  
module.exports = imgValidator
