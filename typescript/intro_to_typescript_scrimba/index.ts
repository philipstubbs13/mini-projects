// import { Bear } from './bear.model';
// import { Animal } from './animal.model';

// const bear = new Bear({ name: 'Omega', tail: true });
// bear.claws = 3;
// bear.add(1, 2);





// function example<T>(arg: T[]): T {

//   return arg[0];
// }

// example([5]);




// import { Bear, Man, Pig } from './interfaces';

// let man: Man | Pig;
// let bear: Bear;
// let pig: Pig;

// type ManBearPig = Bear & Man & Pig

// let manBearPig: ManBearPig;
// manBearPig.firstName = 'Dylan';
// manBearPig.claws = 3;
// manBearPig.bacon = false;




// import { Person } from './person.model';

// const example1: Person = new Person(
//   { firstName: 'Dollan', middleName: 'Dollan', lastName: 'Dollan' });

// example1.firstName = 'Dylan';
// example1.middleName = 'Coding';
// example1.lastName = 'Israel';




// import { Bear, Man, Pig } from './interfaces/index';




// import { Person } from './person.interface';

// const example1: Person = { firstName: 'Dollan', middleName: 'Dollan', lastName: 'Dollan' };

// example1.firstName = 'Dylan';
// example1.middleName = 'Coding';
// example1.lastName = 'Israel';




// type person = { firstName: string };

// const example1: object = undefined;

// const example2: Object = undefined;

// const example3: person = { firstName: 'Dollan' };
// example3.firstName = 'Dylan';




// import { Person } from './person.model';

// function add(val1: number, val2: number): number {
//   return val1 + val2;
// }

// add(1, 10);

// function sayHello(person: Person): string {
//   return `Say Hello to my little friend, ${person.firstName}!`
// }

// sayHello(new Person({ firstName: 'Dylan' }));

// function voidExample(): void {
//   add(1, 2);
// }

// function neverExample(): never {
//   throw Error;
// }




// const example1: object = undefined;

// const example2: Object = undefined;

// const example3: {} = {};
// example3.firstName = 'Dylan';




// import { Age } from './age.enum';
// import { Names } from './name.enum';

// function totalAge(age1: Age, age2: Age) {
//   return age1 + age2;
// }




// const exampleTuple: [string, number] = ['https://www.YouTube.com/CodingTutorials360', 30]




// const example1: string[] = ['Hello World'];

// const example2: (number | boolean)[] = [1, 2, true];

// const example3: boolean[][] = [[true, false]];




// let definitelyNotAString: any = 'I am a string';

// let strLength = (definitelyNotAString as string).length;
// let strLength = (<string>definitelyNotAString).length;




// import { Bear } from './bear.model';

// const bear = new Bear(3);

// if (bear instanceof Bear) {
//   console.log("Hello from TypeScript");
// }




// const arrayExample: number[] = [1, 3, 4, 5];

// let example1: boolean | number = 35;

// let example2 = arrayExample.reduce((num1, num2) => num1 + num2);

// let example3: string = 'Hello World';

// let example4: undefined = undefined;

// let example5: null = null;