const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = { TaskSchema };
