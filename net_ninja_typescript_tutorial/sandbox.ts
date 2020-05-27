let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(7.5));

// arrays
let names = ['luigi', 'mario', 'yoshi'];

// names = 'hello';

names.push('toad');
// names.push(3);
// names[0] = 3;

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun');
// numbers[1] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9, true];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
}