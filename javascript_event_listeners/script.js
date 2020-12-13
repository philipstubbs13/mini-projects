const divs = document.querySelectorAll('div')

addGlobalEventListener('click', 'div', (e) => {
  console.log('hi')
})

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e)
  })
}

// divs.forEach(div => {
//   div.addEventListener('click', () => {
//     console.log('hi');
//   })
// })

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)





// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

// grandparent.addEventListener('click', e => {
//   console.log('Grandparent Bubble')
// })

// parent.addEventListener('click', e => printHi)

// setTimeout(() => {
//   parent.removeEventListener('click', printHi);
// }, 2000)

// child.addEventListener('click', e => {
//   console.log('child Bubble')
// })

// function printHi() {
//   console.log("Hi")
// }





// grandparent.addEventListener('click', e => {
//   console.log('Grandparent Capture')
// }, { capture: true })

// grandparent.addEventListener('click', e => {
//   console.log('Grandparent Bubble')
// })

// parent.addEventListener('click', e => {
//   console.log('parent Capture')
// }, { capture: true })

// parent.addEventListener('click', e => {
//   console.log('parent Bubble')
// })

// child.addEventListener('click', e => {
//   console.log('child Capture')
// }, { capture: true })

// child.addEventListener('click', e => {
//   console.log('child Bubble')
//   e.stopPropagation();
// })

// document.addEventListener('click', e => {
//   console.log('Document bubble')
// })

// document.addEventListener('click', e => {
//   console.log('Document capture')
// })