function print(value) {
  console.log(value)
}

console.dir(print)
console.log({ name: "Kyle", age: 26 })

function useCallback(callback) {
  callback("Hello")
}

const callback = print
callback("Hello")

useCallback(print)

print("Hello World")

useCallback((value) => console.log(value))