# Reference Vs Value in JavaScript

* <https://www.youtube.com/watch?v=-hBJz2PPIVE>
* Pass by value
  * Setting a variable to a value.
* Pass by reference
  * Arrays, objects, classes are passed by reference and can thus be modified.

  ```bash
  let a = 10;
  let b = "Hi"
  let c = a
  c = c + 1
  ```

  ```bash
  let a = 10
  let b = "Hi"
  let c = [1, 2]
  let d = c
  d.push(3)
  d = [3, 4, 5]
  ```

  ```bash
  let a = 10
  let b = "Hi"
  let c = a
  c = c + 1


  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  ```

  ```bash
  let c = [1, 2] // 0x01
  let d = [1, 2] // 0x02

  console.log(`c === d $(c === d)`) // false
  console.log(`c == d $(c == d)`) // false



  let c = [1, 2] // 0x01
  let d = c // 0x01

  console.log(`c === d $(c === d)`) // true
  console.log(`c == d $(c == d)`) // true



  let c = [1, 2] // 0x01
  console.log(`c = ${c}`) // c = 1,2
  add(c, 3)
  console.log(`c = ${c}`) // c = 1, 2, 3
  function add(array, element) {  // (0x01, 3)
    array.push(element)
  }
  ```
