"use strict"

// Notes
// On a global scope, var and let are pretty much the same.

// var a = 'Test1';
// let b = 'Test2';

// function testVar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//         // Returns 50
//         console.log(a);
//     }
//     // Returns 50
//     console.log(a);
// }

// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         // Returns 50
//         console.log(a);
//     }
//     // Returns 30
//     console.log(a);
// }

// for(let i = 0; i < 10; i++){
//     // outputs 0, 1, 2, 3, , 4, 5, 6, 7, 8, 9
//     console.log(i);
// }

// // outputs 10 if we use var in the for loop.
// // outputs i is not defined if we use let in the for loop
// console.log(i);

// // testVar();
// testLet();

const colors = [];

colors.push('red');
colors.push('blue');

console.log(colors);

// Throws error: Assignment to constant variable.
colors = 'Green';