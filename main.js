let numOne = "";
let numTwo = "";
let symbol;
const inputReg = /^[0-9.\bclear\b]*$/;
const methodReg = /^[-/*+%]*$/;
const output = document.querySelector("#output");
const inputFields = document.querySelectorAll(".calc-inputs");

// Reset all variables

const getReset = () => {
  numOne = "";
  numTwo = "";
  symbol = undefined;
  output.innerHTML = numOne;
};

// get number inputs

const getInput = (event) => {
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
};

// Check which num is current, turn number into pos / neg

const getPosNeg = () => {
  if (output.innerHTML == numTwo) {
    numTwo = numTwo - numTwo * 2;
    output.innerHTML = numTwo;
  } else {
    numOne = numOne - numOne * 2;
    output.innerHTML = numOne;
  }
};

//Assign symbol variable for calculation

const getMethod = (event) => {
  getEquation();
  numTwo = "";
  symbol = event.target.value; // assign symbol
};

// Run calculation

const getEquation = () => {
  numTwo.length === 0
    ? (numOne = parseFloat(numOne))
    : (numOne = parseFloat(numOne)) && (numTwo = parseFloat(numTwo));

  switch (symbol) {
    case "*":
      numOne = numOne * numTwo;
      break;

    case "/":
      numOne = numOne / numTwo;
      break;

    case "+":
      numOne = numOne + numTwo;
      break;

    case "-":
      numOne = numOne - numTwo;
      break;

    case "%":
      numOne = (numOne / numTwo) * 100;
      break;
  }
  output.innerHTML = numOne;
};

// Loop over all buttons and determine which has been pressed

inputFields.forEach((input) => {
  if (input.value.match(inputReg)) {
    input.addEventListener("click", getInput);
  } else if (input.value.match(methodReg)) {
    input.addEventListener("click", getMethod);
  } else if (input.value.match("posNeg")) {
    input.addEventListener("click", getPosNeg);
  } else if (input.value.match("=")) {
    input.addEventListener("click", getEquation);
  }
});
