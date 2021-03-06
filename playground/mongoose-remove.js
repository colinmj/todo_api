const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove({}).then(result => {
  console.log(result);
});

// Todo.findOneAndRemove takes the object
// Todo.findByIdAndRemove just takes the id

Todo.findByIdAndRemove('5b33fe378bd48bb219ad876e').then(todo => {
  console.log(todo);
});
