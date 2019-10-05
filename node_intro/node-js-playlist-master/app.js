// var fs = require('fs');

// Create directory
// fs.mkdirSync('stuff');

// Delete directory
// fs.rmdirSync('stuff');

// Create directory async
// fs.mkdir('stuff', function() {
//   fs.readFile('README.txt', 'utf8', function(err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// });

// Delete directory async
// fs.unlink('./stuff/writeMe.txt', function() {
//   fs.rmdir('stuff');
// });

// Delete file
// fs.unlink('writeMe.txt');

// fs.readFile('README.txt', 'utf8', function(err, data){
//   console.log(data);
//   fs.writeFile('writeMe.txt', data);
// });
// fs.writeFileSync('writeMe.txt', readMe);

// var events = require('events');
// var util = require('util');

// var Person = function(name){
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, mary, ryu];

// people.forEach(function(person){
//   person.on('speak', function(mssg){
//     console.log(person.name + ' said: ' + mssg);
//   });
// });

// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'I want a curry.');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));

// normal function statement
// function sayHi() {
//   console.log('hi')
// }

// sayHi();

// function callFunction(fun) {
//   fun();
// }

// function expression
// var sayBye = function(){
//   console.log('bye');
// };

// callFunction(sayBye);

// console.log('hey ninjas');

// setTimeout(function(){
//   console.log('3 seconds have passed.');
// }, 3000);

// var time = 0;
// var timer = setInterval(function(){
//   time += 2;
//   console.log(time + ' seconds have passed.');
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);