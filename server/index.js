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
app.use(morgan('combined'));

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Succesfully connected to MongoDB instance');
}).catch(error => {
  console.error('There was an error connecting to MongoDB: ', error.message);
});

app.use('/api/todos', todoRouter);

// root route
app.get('/', (req, res) => {
  res.send('Hello from root route');
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}`);
});

// TODO
/* 
  [ ] custom error handling  
  [ ] user validation (try Auth0)
  [ ] User model / Schema
*/