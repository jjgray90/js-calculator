let numOne = "";
let numTwo = "";
let numThree = "";
let symbol;
const inputReg = /^[0-9.\bclear\b]*$/;
const operatorReg = /^[-/*+%]*$/;
const output = document.querySelector("#output");
const inputFields = document.querySelectorAll(".calculator__inputs");

// Reset all variables

const getReset = () => {
  numOne = "";
  numTwo = "";
  numThree = "";
  symbol = undefined;
  output.innerHTML = numOne;
};

// get number inputs

const getInput = (event) => {
  let input = event.target.value;
  // let input = event.key === "5";
  console.log(input);
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

const getOperator = (event) => {
  numThree = "";
  getCalculation();
  numTwo = "";
  symbol = event.target.value; // assign symbol
};

// Run calculation

const getCalculation = () => {
  numTwo.length === 0
    ? (numOne = parseFloat(numOne))
    : (numOne = parseFloat(numOne)) && (numThree = parseFloat(numTwo));

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
  numTwo = "";
  output.innerHTML = numOne;
};

// Loop over all buttons and determine which has been pressed

inputFields.forEach((input) => {
  if (input.value.match(inputReg)) {
    input.addEventListener("click", getInput);
    // input.addEventListener("click", getInput);
    console.dir(input);
  } else if (input.value.match(operatorReg)) {
    input.addEventListener("click", getOperator);
  } else if (input.value.match("posNeg")) {
    input.addEventListener("click", getPosNeg);
  } else if (input.value.match("=")) {
    input.addEventListener("click", getCalculation);
  }
});
