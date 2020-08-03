const net = new brain.NeuralNetwork()

// const data = [
//   {
//     input: { r: 0, g:0, b:0 },
//     output: [1]
//   },
//   {
//     input: { r: 1, g:1, b:1 },
//     output: [0]
//   }
// ]

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.39373942160426045,"g":0.24666200300668928,"b":0.7924663504638276},"output":[1]},{"input":{"r":0.1346716692269463,"g":0.7821295413288323,"b":0.9002395925165052},"output":[1]},{"input":{"r":0.9639885241783399,"g":0.26228586751093563,"b":0.8631178630017269},"output":[1]},{"input":{"r":0.5202931290873607,"g":0.4115784394557256,"b":0.39517456725028954},"output":[0]},{"input":{"r":0.5512191659866539,"g":0.3654117238428487,"b":0.09913465844811942},"output":[0]},{"input":{"r":0.15221731463117494,"g":0.32849638702302464,"b":0.5940816304544301},"output":[1]},{"input":{"r":0.8376966838236588,"g":0.7206672383971624,"b":0.44361700099803714},"output":[0]},{"input":{"r":0.6704364280678587,"g":0.06927225531197467,"b":0.12844307487025763},"output":[1]},{"input":{"r":0.01815679203629661,"g":0.4860749655257719,"b":0.30568769133825513},"output":[1]},{"input":{"r":0.6764219547749297,"g":0.7861933904568488,"b":0.7896067715657593},"output":[0]}]

net.train(data)

const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')
let color
setRandomColor()

whiteButton.addEventListener('click', () => {
  chooseColor(1)
})

blackButton.addEventListener('click', () => {
  chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function print() {
  console.log(JSON.stringify(data))
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0]
  guessEl.style.color = guess > .5 ? '#fff' : '#000'
  colorEl.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255} )`
}


// const diagram = document.getElementById('diagram')
// diagram.innerHTML = brain.utilities.toSVG(net)

// console.log(net.run({ r: 1, g: 1, b:0 }))