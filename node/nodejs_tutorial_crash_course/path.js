const path = require('path');


const fileLocation = path.join(__dirname, 'app.js');

console.log(fileLocation);

const fileName = path.basename(fileLocation);

console.log(fileName);

const fileExt = path.extname(fileName);

console.log(fileExt);