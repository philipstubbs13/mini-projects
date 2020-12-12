const body = document.body

// body.append('Hello World', "Bye")

// const div = document.createElement('div')
// const strong = document.createElement('strong')
// strong.innerText = 'Hello World 2'
// // div.innerText = "Hello World"
// div.innerHTML = '<strong>Hello World 2</strong>'

// body.append(div)

// const div = document.querySelector('div')
// console.log(div.textContent)
// console.log(div.innerText)


const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector("#bye")

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi);

console.log(spanHi.getAttribute('id'));
console.log(spanHi.title);
console.log(spanHi.setAttribute('title', 'sksksksk'));
spanHi.id = "skskfkdkd"
spanHi.removeAttribute("title")

console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)
spanHi.dataset.newName = "hi"

spanHi.classList.add('new-class')
spanHi.classList.remove('hi1')
spanHi.classList.toggle('hi3')
spanHi.classList.toggle('hi3', true)

spanHi.style.backgroundColor = "red"