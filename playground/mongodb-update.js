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
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID('5b32ab538bd48bb219ad2c2b')
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(JSON.stringify(result, undefined, 2));
    //   });

    db.collection('Users').findOneAndReplace(
      {
        name: 'Bojangles'
      },
      {
        $set: {
          name: 'Colin'
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    ).then((result) => {
      console.log(result)
    })

    // client.close();
  }
);
