let fizzValue = document.getElementById("Fizzvalue")
let buzzValue = document.getElementById("Buzzvalue")
let resultsLabel = document.getElementById("results-label")
let results = document.getElementById("results")

function FizzBuzzA(value1, value2) {
  let returnValue = ""
  for (let i = 1; i <= 100; i++) {
    if (i % value1 === 0 && i % value2 === 0) {
      returnValue += `<strong>FIZZ-BUZZ</strong> `
    } else if (i % value1 === 0) {
      returnValue += `fizz `
    } else if (i % value2 === 0) {
      returnValue += `buzz `
    } else {
      returnValue += `${i} `
    }
  }
  return returnValue
}

function buzzIt() {
  let output = ""
  let val1 = fizzValue.value
  let val2 = buzzValue.value
  output = FizzBuzzA(val1, val2)
  resultsLabel.style.display = "block"
  results.innerHTML = output
}

function resetIt() {
  fizzValue.value = "3"
  buzzValue.value = "5"
  output = ""
  resultsLabel.style.display = "none"
  results.innerHTML = ""
}

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
