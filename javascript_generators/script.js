function* generateId() {
  let id = 1

  while (true) {
    const increment = yield id
    if (increment != null) {
      id += increment
    } else {
      id++
    }
  }
}

const generatorObject = generateId()
console.log(generatorObject.next())
console.log(generatorObject.next(4))
console.log(generatorObject.throw(new Error('Hi')))
console.log(generatorObject.return(10))
console.log(generatorObject.next())



// function* generator(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i]
//   }
// }

// const generatorObject = generator([1, 3, 5])
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())

// while (object.next().done !== false) {
  
// } 

// const generatorObject =generateId()
// console.log(generatorObject)
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// const generatorObject2 = generateId()
