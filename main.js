let numOne = "";
let numTwo = "";
let symbol;

let output = document.getElementById("output");

const getReset = () => {
  numOne = "";
  numTwo = "";
  symbol = undefined;
  output.innerHTML = numOne;
  console.log(symbol);
};

const getInput = (id) => {
  let input = document.getElementById(id).value;

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

const getMethod = (id) => {
  getEquation();
  numTwo = "";

  symbol = document.getElementById(id).value;
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
