let numOne = "";
let numTwo = "";
let symbol;
const inputReg = /^[0-9.\bclear\b]*$/;
const methodReg = /^[-/*+%]*$/;
const output = document.querySelector("#output");
const inputFields = document.querySelectorAll(".calc-inputs");

const getReset = () => {
  numOne = "";
  numTwo = "";
  symbol = undefined;
  output.innerHTML = numOne;
};

const getInput = (event) => {
  let input = event.target.value;

  if (input === "clear") {
    getReset();
  } else if (!symbol) {
    numOne += input;
    output.innerHTML = numOne;
  } else {
    numTwo += input;
    output.innerHTML = numTwo;
  }
};

const getMethod = (event) => {
  getEquation();
  numTwo = "";

  symbol = event.target.value;
};

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
  }
  output.innerHTML = numOne;
};

inputFields.forEach((input) => {
  if (input.value.match(inputReg)) {
    input.addEventListener("click", getInput);
  } else if (input.value.match(methodReg)) {
    input.addEventListener("click", getMethod);
  } else if (input.value.match("=")) {
    input.addEventListener("click", getEquation);
  }
});
