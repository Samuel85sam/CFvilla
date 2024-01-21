const yup = require("yup");
const { object } = require('yup');

//.shape?
const userValidator = object({
    admin: yup.boolean(),
    firstName: yup.string().min(2).max(30).required(),
    lastName: yup.string().min(2).max(30).required(),
    adressMail:yup.string().email().required(),
    jwt: yup.string(),
    password: yup.string().min(6).required() 
  })


module.exports = userValidator
