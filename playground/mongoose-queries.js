const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5b32fc266e77d678c1453bb811';

if (!ObjectId.isValid(id)) {
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('todo', todo);
// });

// Todo.findById(id)
//   .then(todoById => {
//     if (!todoById) {
//       return console.log('id not found');
//     }
//     console.log(todoById);
//   })
//   .catch(e => {
//     console.log(e);
//   });

User.findById('5b32de0a3e600970a21807f5').then(
  user => {
    if (!user) {
      return console.log('no user');
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
