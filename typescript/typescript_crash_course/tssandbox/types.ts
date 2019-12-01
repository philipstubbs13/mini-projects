import console = require("console");

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello'.slice(0, 3);
myNum = 1;
myBool = true;
myVar = 5;

strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ['Hello', 4,];

// let myVoid: void = null;
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);

console.log(strArr);
console.log(numArr);
console.log(boolArr);

console.log(strNumTuple);