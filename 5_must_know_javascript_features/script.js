// function calculatePrice(price, taxes, description) {
//   taxes = taxes ?? .05
//   description = description ?? 'Default item'
//   const total = price * (1 + taxes);
//   console.log(`%c${description} With Tax:%c $${total}`,
//   "font-weight: bold; color: red;",
//   "color: green"
//   );
// }

// calculatePrice(100, 0.07, "My Item");
// calculatePrice(100, 0, "My other item");
// calculatePrice(100, undefined, "");

// class Person {
//   constructor (name, address, hobbies) {
//     this.name = name;
//     this.address = address;
//     this.hobbies = hobbies;
//   }

//   print() {
//     console.log(this)
//   }
// }

// function printPersonStreet(person) {
//   console.log(person?.address?.street);
// }

// const kyle = new Person(
//   "Kyle",
//   { street: 'skskks' },
//   ['bowling']
// )

// console.log(kyle.hobbies?.[0].toLowerCase());
// kyle.print?.()


// printPersonStreet(kyle)

// const name = 'Kyle'
// const favoriteFood = 'Rice'

// const kyle = {
//   name,
//   favoriteFood
// }

// console.log(kyle);

const button = document.querySelector('button');
button.style.backgroundColor = "green";