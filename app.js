const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.promise = global.Promise;
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const mongoString = `mongodb://${process.env.DB_USR}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/replicaSet=globaldb?ssl=true`

// Configure some middleware
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'heatroom-cookie',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));
// Connect to cosmos DB
mongoose.set('debug', true);
mongoose.connect(mongoString, {
  useNewUrlParser: true
});
// Models
require('./models/User');

// Passport (must be below all models)
require('./config/passport');

app.listen(port, () => console.log(`Server is listening on port: ${port}`));