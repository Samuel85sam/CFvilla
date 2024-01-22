const yup = require("yup");
const { object } = require('yup');

//.shape?
const imgValidator = object({
    fileName: yup.string().required() ,
    originalFileName: yup.string().required() ,
    type: yup.string().required() ,
    size: yup.number().required() 
  })
  
module.exports = imgValidator
