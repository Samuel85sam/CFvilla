require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
app.use('/static', express.static('uploads'));

//process.env.NODE_ENV = "production"

const errorHandling = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    msg: err.message,
    success: false
  });
};



const mongoose = require('mongoose');
const router = require('./resources/router/main.router');
const cors = require('cors');
async function server() {
  try {
    await mongoose.connect(process.env.DB_CONNECT)
    console.log('===> mongoose.connect OK');
  } catch (error) {
    console.log(`DB connection error ===> ${error}`); //!LOG
  }
}
server()

const { PORT } = process.env;
const port = PORT;
// *Activation du middleware pour parser les données au format JSON
app.use(express.json()); // ==> express attend un format json par defaut !!!!!
app.listen(port, () => {
  console.log(`Server is running on port ${PORT}.`);
})
var corsOptions = {
 // origin: "https://cfvillabackend.onrender.com"
origin:"http://localhost:5173" //! attention !!! pas de "/"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('uploads'));
app.use('/api', router);

//*tests
app.get('/', (req, res) => {
  res.send(`Welcome to Sam's web app`);
})
app.use(errorHandling);

module.exports = app;




