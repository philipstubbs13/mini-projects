const number = 50
let result

// if (number >= 50) {
//   result = 'Not to fifty!'
// } else {
//   result = 'It could be worse'
// }

// const user = {}

// if (user.valid) {
//   user.save()
// } else {
//   user.printErrors()
// }

// user.valid ? user.save() : user.printErrors()

// result = number >= 50 ? 'Not to fifty' : 'It could be worse'


if (number === 0) {
  result = 'You have nothing'
} else if (number < 10) {
  result = 'You have very little'
} else {
  result = 'You have a lot'
}

result = number === 0 ? 'You have nothing' : (
  number < 10 ? 'You have very little' : 'You have a lot'
)

console.log(result);