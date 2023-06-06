const favoriteAnimal = "bobcat"

switch (favoriteAnimal) {
    case "jaguar":
    case "bobcat":
    case "cat": {
        console.log("Cats are great")
        break
    }
    case "dog": {
        console.log("Dogs are kinda loud")
        break
    }
    case "shark": {
        console.log("That's an interesting choice")
        break
    }
    default:
        console.log("I have never heard of that animal")
}

// if (favoriteAnimal === "cat") {
//     console.log("Cats are great")
// } else if (favoriteAnimal === "dog") {
//     console.log("Dogs are kinda loud")
// } else if (favoriteAnimal === "shark") {
//     console.log("That's an interesting choice")
// } else {
//     console.log("I have never heard of that animal")
// }