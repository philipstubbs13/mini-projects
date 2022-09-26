const mutationObserver = new MutationObserver(entries => {
    console.log(entries)
})

const parent = document.querySelector(".parent")

// Mutation Observer Basics
// mutationObserver.observe(parent, { childList: true })
// mutationObserver.disconnect()

// parent.children[0].remove()
// setTimeout(() => {
//     parent.appendChild(document.createElement("div"))
// }, 100)



// Observe Attributes
// mutationObserver.observe(parent, {
//     attributes: true,
//     attributeOldValue: true,
//     attributeFilter: ["id"]
// })

// parent.id = "New Id"



// Observe Text
// mutationObserver.observe(parent.children[0].childNodes[0], {
//     characterData: true,
//     characterDataOldValue: true,
// })



// Observe Subtree
mutationObserver.observe(parent, {
    subtree: true,
    attributes: true,
})

parent.children[0].id = "Test"
