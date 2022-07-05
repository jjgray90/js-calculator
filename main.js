let numOne = "";
let numTwo = "";
let numThree = "";
let symbol;
const inputReg = /^[0-9.\bclear\b]*$/;
const operatorReg = /^[-/*+%]*$/;
const calculator = document.querySelector(".calculator");
const output = document.querySelector(".calculator__output");
const outputSymbol = document.querySelector(".calculator__output-symbol");
const inputFields = document.querySelectorAll(".calculator__inputs");
const audioClick = document.querySelector("#audio-click");
const audioHello = document.querySelector("#audio-hello");

// Reset all variables

const getReset = () => {
  numOne = "";
  numTwo = "";
  numThree = "";
  symbol = undefined;
  output.innerHTML = numOne;
  outputSymbol.innerHTML = "";
};

// get number inputs

const getInput = (event) => {
  audioClick.play();

  let input = event.target.value;
  if (input === "clear") {
    getReset();
  } else if (!symbol) {
    input === "." && numOne.includes(".") ? "" : (numOne += input);
    output.innerHTML = numOne;
  } else {
    input === "." && numTwo.includes(".") ? "" : (numTwo += input);
    output.innerHTML = numTwo;
  }
  checkHello();
};

// Check which num is current, turn number into pos / neg

const getPosNeg = () => {
  audioClick.play();

  if (output.innerHTML == numTwo) {
    numTwo = numTwo - numTwo * 2;
    output.innerHTML = numTwo;
  } else {
    numOne = numOne - numOne * 2;
    output.innerHTML = numOne;
  }
};

//Assign symbol variable for calculation

const getOperator = (event) => {
  audioClick.play();
  numThree = ""; // resent numThree to empty string
  if (numTwo.length > 0) {
    getCalculation();
  }
  symbol = event.target.value; // assign symbol
  outputSymbol.innerHTML = event.target.innerHTML; // Set symbol in output display
};

// Run calculation

const getCalculation = () => {
  audioClick.play();

  // Only turn numTwo from string to number once it has a value, and set value to numThree

  numTwo.length === 0
    ? (numOne = parseFloat(numOne))
    : (numOne = parseFloat(numOne)) && (numThree = parseFloat(numTwo));

  // Based on symbol, run relevant calculation

  switch (symbol) {
    case "*":
      numOne = numOne * numThree;
      break;

    case "/":
      numOne = numOne / numThree;
      break;

    case "+":
      numOne = numOne + numThree;
      break;

    case "-":
      numOne = numOne - numThree;
      break;

    case "%":
      numOne = (numOne / numThree) * 100;
      break;
  }

  numTwo = ""; // Reset numTwo to empty string
  numOne % 1 == 0 || typeof numOne == ""
    ? (output.innerHTML = numOne)
    : (output.innerHTML = numOne.toFixed(2)); // Fix numOne to 2 decimal places if it's not divisible by one
  outputSymbol.innerHTML = ""; // Reset calc display to remove symbol
};

// Loop over all buttons and determine which has been pressed

inputFields.forEach((input) => {
  if (input.value.match(inputReg)) {
    input.addEventListener("click", getInput);
  } else if (input.value.match(operatorReg)) {
    input.addEventListener("click", getOperator);
  } else if (input.value.match("posNeg")) {
    input.addEventListener("click", getPosNeg);
  } else if (input.value.match("=")) {
    input.addEventListener("click", getCalculation);
  }
});

const checkHello = () => {
  if (numOne === "07734") {
    audioHello.play();
    calculator.classList.add("hello-spin");
  } else calculator.classList.remove("hello-spin");
};
