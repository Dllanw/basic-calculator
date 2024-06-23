const inputRight = document.getElementById("screenRight");
const inputLeft = document.getElementById("screenLeft");
const resultText = document.getElementById("result");

function product() {
    let numberOne = inputLeft.value;
    let numberTwo = inputRight.value;

    let result = numberOne * numberTwo;

    showResult(result)
}

function quotient() {
    let numberOne = inputLeft.value;
    let numberTwo = inputRight.value;

    let result = parseFloat(numberOne / numberTwo);

    showResult(result)
}

function sum() {
    let numberOne = inputLeft.value;
    let numberTwo = inputRight.value;

    let result = +numberOne + +numberTwo;

    showResult(result)
}

function subtraction() {
    let numberOne = inputLeft.value;
    let numberTwo = inputRight.value;

    let result = +numberOne - +numberTwo;

    showResult(result)
}

function pow() {
    let numberOne = inputLeft.value;
    let numberTwo = inputRight.value;

    let result = Math.pow(numberOne, numberTwo);

    showResult(result)
}

function root() {
    let numberTwo = inputRight.value;

    let result = Math.sqrt(numberTwo);

    showResult(result)
}

function abs() {
    let numberTwo = inputRight.value;

    let result = Math.abs(numberTwo);

    showResult(result)
}

function random() {
    const max = parseFloat(inputRight.value);
    const min = parseFloat(inputLeft.value);

    if (isNaN(max) || isNaN(min) || max <= min) {
        showResult("Error: Ingrese un máximo mayor que el minimo");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    showResult(result)
}

function rounded() {
    let numberTwo = parseFloat(inputRight.value);

    let result = Math.round(numberTwo);

    showResult(result);
}

function floor() {
    let numberTwo = parseFloat(inputRight.value);

    let result = Math.floor(numberTwo);

    showResult(result);
}

function ceil() {
    let numberTwo = parseFloat(inputRight.value);

    let result = Math.ceil(numberTwo);

    showResult(result);
}

function showResult(result) {
    resultText.textContent = result;
}

function deleteFields() {
    resultText.textContent = "";
    inputLeft.value = "";
    inputRight.value = "";
}