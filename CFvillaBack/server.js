//*.env
require('dotenv').config();
//*express
const express = require('express');
require('express-async-errors');
//*DataBase
const mongoose = require('mongoose');
//*router
const router = require('./resources/router/main.router');
// *Importation du module 'cors' pour gérer les requêtes CORS (Cross-Origin Resource Sharing)(unquement utile lorsque le FE parle au BE et inversement)
const cors = require('cors');

const authController = require('./resources/auth/auth.controller');
const cookieSession = require("cookie-session");
const User = require('./resources/users/users.model');

//----------------------------------------------

//* DB connect
const app = express();
async function server() {
  try {
    await mongoose.connect(process.env.DB_CONNECT)
    console.log('===> mongoose.connect OK');
  } catch (error) {
    console.log(`DB connection error ===> ${error}`); //!LOG
  }
}
server()

//----------------------------------------------

//*auth middleWares (chaque (req,res) passe par les middleware)
const authentificator = async function (req, res, next) {
  const bearer = req.headers['authorization'];
  const tokenDecoded = bearer && bearer.split(' ')[1];
  req.currentUser = await User.findOne({jwt:`${tokenDecoded}`}).exec();
  next()
}
app.use(authentificator)

//--cookie-session helps to stores the session data on the client within a cookie without requiring any database/resources on the server side
app.use(
  cookieSession({
    name: "sam-session",
    keys: ["COOKIE_SECRET"], 
    httpOnly: true
  })
);

//----------------------------------------------

//*.env
const { PORT, NODE_ENV } = process.env;
const port = PORT;
// *Activation du middleware pour parser les données au format JSON
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${PORT}.`);
})
var corsOptions = {
  origin: "https://cfvillabackend.onrender.com/"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// *Ajout du routing avec une base URL '/api' pour respecter le principe RESTful
app.use('/api', router);
//*tests
app.get('/', (req, res) => {
  res.send(`Welcome to Sam's web app`);
})

module.exports = app;




