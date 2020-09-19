const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

Router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

Router.post('/', async (req, res) => {
  const { title, notes, isDone, isImportant, reminder, stepList } = req.body;

  try {
    const todo = new Todo({
      title,
      notes,
      isDone,
      isImportant,
      reminder,
      stepList,
    });
    await todo.save();
    res.json({ message: 'New todo added to database' });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = Router;
