const bcrypt = require('bcryptjs');

async function hashPassword(plaintext) {
  const user = {
    name: 'Brad',
    email: 'brad@gmail.com',
    password: plaintext
  }

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(plaintext, salt);

  console.log(user);
}

async function comparePasswords(plaintext, hash) {
  const isMatch = await bcrypt.compare(plaintext, hash);

  if(isMatch) {
    console.log('Match');
  } else {
    console.log('Not Match');
  }
}

// hashPassword('123456');
comparePasswords('123456', '$2a$10$f5MWIGFo99a06Hhwm0hnrOtvh/He7ZQ.qtBBuuv1B1PkaudAXxY4S');