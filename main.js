let numOne = "";
let numTwo = "";
let numThree = "";
let symbol;
let classActive;
const inputReg = /^[0-9.\bclear\b]*$/;
const operatorReg = /^[-/*+%]*$/;
const output = document.querySelector(".calculator__output");
const outputSymbol = document.querySelector(".calculator__output-symbol");
const inputFields = document.querySelectorAll(".calculator__inputs");
const audioClick = document.querySelector("#audio");

const playClick = () => audioClick.play();

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
  playClick();

  let input = event.target.value;
  // let input = event.key;
  if (input === "clear") {
    getReset();
  } else if (!symbol) {
    input === "." && numOne.includes(".") ? "" : (numOne += input);
    output.innerHTML = numOne;
  } else {
    input === "." && numTwo.includes(".") ? "" : (numTwo += input);
    output.innerHTML = numTwo;
  }
};

// Check which num is current, turn number into pos / neg

const getPosNeg = () => {
  playClick();

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
  symbol = "";

  playClick();
  numThree = ""; // resent numThree to empty string
  getCalculation();
  numTwo = ""; // reset numTwo to empty string
  outputSymbol.innerHTML = event.target.innerHTML; // Set symbol in output display
  symbol = event.target.value; // assign symbol
};

// Run calculation

const getCalculation = () => {
  playClick();

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
    // input.addEventListener("keydown", getInput);
  } else if (input.value.match(operatorReg)) {
    input.addEventListener("click", getOperator);
  } else if (input.value.match("posNeg")) {
    input.addEventListener("click", getPosNeg);
  } else if (input.value.match("=")) {
    input.addEventListener("click", getCalculation);
  }
});
