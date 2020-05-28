// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;

// // character = 20;
// character = 'luigi';

// // age = 'yoshi';
// age = 40;

// // isBlackBelt = 'yes';
// isBlackBelt = true;

// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }

// console.log(circ(7.5));

// // arrays
// let names = ['luigi', 'mario', 'yoshi'];

// // names = 'hello';

// names.push('toad');
// // names.push(3);
// // names[0] = 3;

// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push('shaun');
// // numbers[1] = 'shaun';

// let mixed = ['ken', 4, 'chun-li', 8, 9, true];

// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;

// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };

// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking']

// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
// }

// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// age = 'luigi';
// age = 30;

// isLoggedIn = 25;
// isLoggedIn = true;

// // arrays
// let ninjas: string[] = [];

// ninjas.push('shaun');

// union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);
// console.log(mixed);

// let uid: string | number;
// uid = '123';
// uid = 123;

// objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 }


// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColour: string
// }

// ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }

// let age: any = 25;

// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi' };
// console.log(age);

// let mixed: any[] = [];

// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// let ninja: { name: any, age: any };

// ninja = { name: 'yoshi', age: 25 };
// console.log(ninja);

// ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);

// let greet: Function;

// greet = 'hello'

// greet = () => {
//   console.log('hello, again');
// }

// const add = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c)
// }

// add(5, 10, '20');

// const minus = (a: number, b: number): number => {
//   return a + b;
// }

// let result = minus(10, 7);

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum }

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}