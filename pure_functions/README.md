# Pure Functions in 10 minutes

* <https://www.youtube.com/watch?v=fYbhD_KMCOg>

```bash
// impure function
const array = [1, 2, 3]

function addElementToArray(element) {
  array.push(element)
}
```

```bash
// impure function
const array = [1, 2, 3]

function addElementToArray(a, element) {
  a.push(element)
}
```

```bash
// pure function
const array = [1, 2, 3]

function addElementToArray(a, element) {
  return [...a, element]
}
```

```bash
// impure function
const array = [1, 2, 3]

function addElementToArray(a, element) {
  return [...a, element, Math.random()]
}
```

```bash
addElementToArray(array, 4)

replaces:

[1, 2, 3,4]
```
