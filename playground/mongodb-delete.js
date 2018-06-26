const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongo db server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos')
    //   .deleteMany({
    //     text: 'Play goorin bros'
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    //same as delete many except that it just deletes the first one!

    //findOneAndDelete

    db.collection('Todos')
      .findOneAndDelete({
        completed: false
      })
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
