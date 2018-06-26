// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongo db server');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .find({
    //     _id: new ObjectID('5b3270e65343cb6708964e5c')
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({
        name: 'Colin'
      })
      .toArray()
      .then(
        docs => {
          console.log(docs);
        },
        err => {
          console.log('Unable to fetch todos', err);
        }
      );

    // client.close();
  }
);
