// Debugging Tips
// console.time("Timer");
// for (let i = 0; i < 1000000000; i++) {
//   // This is a long loop
// }
// console.timeEnd("Timer")

// const x = 1
// // if (x !== 1) console.error("X is not 1")
// console.assert(x === 1, "X is not 1")


// const people = [
//   { name: "Kyle", age: 25 },
//   { name: "John", age: 33 },
//   { name: "Sally", age: 24}
// ]
// debugger
// console.table(people)








// Binary Math
// console.log(0.1 + 0.2)
// if (x <= .35005 && x >= .349995)











// Set
// const uniqueNumbers = [1, 234, 234, 45]

// const set = new Set(uniqueNumbers)
// console.log(set.delete(1))

// console.log(set)








// Map
// const CURRENCY_MAP = {
//   "United States": "USD",
//   India: "Rupee",
// }

// const CURRENCY_MAP = new Map([])
// const usa = { name: "United States"}
// CURRENCY_MAP.set(usa, "USD")
// console.log(CURRENCY_MAP.get(usa))
// CURRENCY_MAP.forEach

// const currency = CURRENCY_MAP["United States"]

// console.log(currency)






// Object.freeze
// "use strict"
// const person = Object.freeze({
//   name: "Kyle",
//   age: 25,
//   favoriteFood: "Rice",
//   address: Object.freeze({
//     street: '1234'
//   }),
//   hobbies: Object.freeze(['Weight Lifting', 'Bowling']),
// })

// console.log(person)
// person.hobbies.push('sdfdsfdf')
// console.log(person)









// Loop Labels

// loop1: for (let i = 0; i < 4; i++) {
//   loop2: for (let j = 0; j < 3; j++) {
//     console.log(
//       `%ci=%c${i}%c, j=%c${j}`,
//       "color #555",
//       "font-weight: bold",
//       "color: #555",
//       "font-weight: bold"
//     )
//     if (i === 1) {
//       break loop1
//     }
//   }
// }

// name: {
//   console.log("before")
//   break name
//   console.log("after")
// }

// console.log("after scope")