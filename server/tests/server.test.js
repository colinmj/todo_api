const request = require('supertest');
const expect = require('expect');
const { ObjectId } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [
  {
    _id: new ObjectId(),
    text: 'first text todo'
  },
  {
    _id: new ObjectId(),
    text: 'second text todo'
  }
];

beforeEach(done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => {
      done();
    });
});

describe('POST /todos', () => {
  it('should create a new todo', done => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({
        text
      })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find({ text })
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(error => {
            done(error);
          });
      });
  });
  it('should not create todo with invalid body data', done => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(2);
            done();
          })
          .catch(err => {
            done(err);
          });
      });
  });
});

describe('GET/Todos', () => {
  it('should get all todos', done => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET/Todos/:id', () => {
  it('should return todo doc', done => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });
  it('should return 404 if todo not found', done => {
    var hexId = new ObjectId().toHexString();
    request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non valid object ids', done => {
    request(app)
      .get('/todos/123abc')
      .expect(404)
      .end(done);
  });
});
