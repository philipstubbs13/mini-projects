const jwt = require('jwt-simple');
const config = require('config');
const uuid = require('uuid');

function getToken() {
  const payload = { id: uuid.v4(), name: 'Brad'};

  const token = jwt.encode(payload, config.get('jwtSecret'));

  return { token };
}

function validateToken(token) {
  const decoded = jwt.decode(token, config.get('jwtSecret'));
  console.log(config.get('apiKey'));

  return decoded
}

// console.log(getToken());
console.log(validateToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImVhOWI4ZGJkLWI4NGYtNGE5Yy04MjUzLTMwYTljNGNiNTUyNSIsIm5hbWUiOiJCcmFkIn0.nbhq-bUv85dFD2yF2xRn20dDpZ4jWk6wQpuRiDoQzEM'));