const mongoose = require('mongoose');
const { Schema } = mongoose;

const stepListSchema = new Schema({
  step_content: String,
  is_done: Boolean,
});

const TodoSchema = new Schema({
  title: { type: String, default: 'Untitled note' },
  notes: String,
  is_done: { type: Boolean, default: false },
  is_important: { type: Boolean, default: false },
  reminder: Date,
  step_list: [stepListSchema],
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

mongoose.model('Todo', TodoSchema);
