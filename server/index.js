require('dotenv').config();
require('./src/models/Todo'); // ??

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const todoRouter = require('./src/routes/todoRoutes');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('Connection error: ', error.message);
});
db.once('open', function () {
  console.log('Succesfully connected to MongoDB instance');
});

app.use('/api/todos', todoRouter);

// root route
app.get('/', (req, res) => {
  res.send('Hello from root route');
});

// TODO
/* 
  [ ] custom error handling  
  [ ] user validation (try Auth0)
  [ ] User model / Schema
*/

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`App is listening on PORT ${process.env.PORT}`);
});
