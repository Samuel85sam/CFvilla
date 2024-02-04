const yup = require("yup");
const { object } = require('yup');

const imgValidator = object({
    // originalname: yup.string().required(),
    // fileName: yup.string().required(),
    // type: yup.string().required(),
    // path: yup.string().required(),
    // size: yup.number().required() 
           // originalname: String,
           lastModified: yup.number(),//.required(),
           name: yup.string(),//.required(),
           type: yup.string(),//.required(),
           // fileName: yup.string().required(),
           path: yup.string(),//.required(),
           size: yup.number(),//.required()
  })


  
module.exports = imgValidator
