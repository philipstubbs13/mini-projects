# LinkedIn JavaScript Quiz Interview Questions

* <https://www.youtube.com/watch?v=V__irponAuA&t=7s>

* When would 'Results shown' be logged to the console?
    * Immediately

```bash
let modal = document.querySelector('#results');
setTimeout(function() {
    modal.classList.remove('hidden');
}, 1000)
console.log('Results shown');
```

* Which statement creates a new Person object called "student"?

```bash
var student = new Person();
```

* How would you use this function to find out how much tax should be paid on $50?

```bash
function addTax(total) {
    return total * 1.05;
}
```

```bash
addTax(50);
```

* What will be logged to the console?
    * 4

```bash
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);
```

* Which choice is an incorrect way to define an arrow function that returns an empty object?

```bash
() => {}
```

* What is the name of a function whose execution can be suspended and resumed at a later point?
    * Generator function

* What is the result of running this code?
    * ReferenceError

```bash
sum(10, 20);
diff(10, 20);
function sum(x, y) {
    return x + y
}
let diff = function(x, y) {
    return x - y
}
```

* For the following class, how do you get the value of 42 from 'x'?

```bash
class X {
    get Y() { return 42 ;}
}
var x = new X();
```

```bash
x.Y
```

* When would you use a conditional statement?
    * when you want your code to choose between multiple options

* Your code is producing this error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?
    * You are calling a method named reduce on an object that is declared but has no value.

* Which choice is not a unary operator?
    * instanceof

* What will this code print?
    * 2

```bash
var v = 1;

var f1 = function () {
    console.log(v);
}

var f2 = function() {
    var v = 2;
    f1();
};

f2();
```

* Which statement creates a new function called discountPrice?

```bash
let discountPrice = function(price) {
    return price * 0.85;
}
```

* This program has a problem. What is it?
    * The condition in the ternary statement is using the assignment operator.

```bash
var a;
var b = (a = 3) ? true : false
```

* What is the value of dessert.type after executing this code?
    * pudding

```bash
const dessert = { type: 'pie' };
dessert.type = 'pudding';
```

