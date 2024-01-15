//.env
require('dotenv').config();
//express
const express = require('express');
require('express-async-errors');
//DataBase
const mongoose = require('mongoose');
//router
const router = require('./resources/router/mainRouter');



// Importation du module 'cors' pour gérer les requêtes CORS (Cross-Origin Resource Sharing)(unquement utile lorsque le FE parle au BE et inversement)
const cors = require('cors');

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

const authentificator = function async (req, res, next) {
  console.log('LOGGED', req.headers)
  
  //req.currentUser = ...
    next()
}

app.use (authentificator) 



//.env
const { PORT, NODE_ENV } = process.env;
const port = PORT;
// Activation du middleware pour parser les données au format JSON
app.use(express.json());
app.listen(port, () => {
    console.log(`BackEndApp listening on port ${port}`);
})
app.use(cors());
// Ajout du routing avec une base URL '/api' pour respecter le principe RESTful
app.use('/api', router);
//tests
app.get('/', (req, res) => {
    res.send('Hello World!');
})
// Exportation du serveur API (nécessaire pour les tests)
module.exports = app;




