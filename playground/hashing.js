const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// sha hasshing

// var message = 'I am user number 5';
// var hash = SHA256(message).toString();

// // console.log(`Message: ${message}, Hash: ${hash}.`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('data was changed dont trust');
// }

//// jwt

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abx');
// // console.log(token);

// var decoded = jwt.verify(token, '123abx');
// console.log(decoded);

//bcrypt

var password = '123abc!';
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword =
  '$2a$10$NwnbqJo.mwuI0tv3uewZSuiF54i97iCd0YtNHuVKzRbhDeUjfoX0q';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
