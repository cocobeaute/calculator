console.log("starting calculator")

let firstNumber = '';
let secondNumber = '';
let operation
let result

let outputDisplay = ''

const limit = 10

const output = document.getElementById("output")

function buttonClick(event) {
    if (operation === undefined) {

        if (firstNumber.length < 10) {

            firstNumber = firstNumber + event.target.innerHTML

            outputDisplay = firstNumber
            output.value = outputDisplay

        }

    } else {

        if (secondNumber.length < 10) {

            secondNumber = secondNumber + event.target.innerHTML

            output.value = secondNumber
            outputDisplay = outputDisplay + secondNumber
            output.value = outputDisplay
        }

    }


}

function operationClick(op) {
    operation = op
    outputDisplay = outputDisplay + operation
    output.value = outputDisplay
}

function equalClick() {
    const firstNumberValue = Number(firstNumber)
    const secondNumberValue = Number(secondNumber)

    if (operation === '+') {
        result = firstNumberValue + secondNumberValue
    } else if (operation === '-') {
        result = firstNumberValue - secondNumberValue
    } else if (operation === '/') {
        result = firstNumberValue / secondNumberValue
    } else if (operation === 'x') {
        result = firstNumberValue * secondNumberValue
    }

    console.log(result)
    output.value = result

    firstNumber = '';
    secondNumber = '';
    operation = undefined;
    result = 0;
}