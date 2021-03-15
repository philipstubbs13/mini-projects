// Dynamic module imports.
// if (true) {
//   import("./module.js").then(({ default: printModule }) => {
//     printModule()
//   })
// }

// console.log("In main file")




// Generator Functions
// function* idGenerator() {
//   let id = 1

//   while (true) {
//     yield id
//     id++
//   }
// }

// const generator = idGenerator()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())





// Template Literal functions
// function queryAll(strings, ...values) {
//   const string = values.reduce((finalString, value, index) => {
//     return `${finalString}${value}${strings[index + 1]}`
//   }, strings[0])

//   return document.querySelectorAll(string)
// }

// const firstName = "Kyle"
// const hobby = "weight lifting"
// console.log(queryAll`div`)





// in keyword
// const person = {
//   name: null,
//   age: 25,
// }

// delete person.name
// console.log(person)

// if (person.name != null) {
//   console.log("Has truthy name value")
// }

// if ("name" in person) {
//   console.log("Has name property")
// }






// Block Statements
// const a = 1

// function main() {
//   const a = 2

//   console.log(`In Main: ${a}`)
// }

// {
//   const a = 3
//   console.log(`In Brackets: ${a}`)
// }

// switch(a) {
//   case 1: {
//     const result = a * 2
//     console.log(result)
//     break
//   }
//   case 2: {
//     const result = a / 2
//     console.log(result)
//     break
//   }
//   case 3: {
//     const result = a + 2
//     console.log(result)
//     break
//   }
// }

// main()
// console.log(`In Global: ${a}`)