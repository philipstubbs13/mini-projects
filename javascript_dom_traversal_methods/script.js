// const grandparent = document.getElementById("grandparent-id")
// const grandparent = document.querySelector("#grandparent-id")
// const grandparent = document.querySelector(".grandparent")
// const parents = Array.from(grandparent.children)
// const parentOne = parents[0]
// const children = parentOne.children
// const childOne = grandparent.querySelector(".child")
const childOne = document.querySelector("#child-one")
const childTwo = childOne.nextElementSibling
// const parent = childOne.parentElement
// const grandparent = parent.parentElement
// const grandparent = childOne.closest('.grandparent')
// const children = grandparent.querySelectorAll(".child")

changeColor(childTwo.previousElementSibling)


// const parents = Array.from(document.getElementsByClassName("parent"));
// const parents = document.querySelectorAll('.parent')

// parents.forEach(changeColor);
// changeColor(parent)

function changeColor(element) {
  element.style.backgroundColor = '#333'
}