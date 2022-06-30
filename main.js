let inputArrayOne = [];
let inputArrayTwo = [];
let numOne = 0;
let numTwo = 0;
let symbol;

let output = document.getElementById("output");

const getReset = () => {
  inputArrayOne = [];
  inputArrayTwo = [];
  numOne = 0;
  numTwo = 0;
  symbol = undefined;
  document.getElementById("output").innerHTML = numOne;
};

// const inputToNumber = (array, bloop, input) => {
//   array.push(input);
//   bloop = parseInt(array.join(""));
//   output.innerHTML = bloop;
//   console.log(inputArrayOne);
// };

const getInput = (id) => {
  let input = document.getElementById(id).value;

  if (input === "clear") {
    getReset();
  } else if (!symbol) {
    // inputToNumber(inputArrayOne, numOne, input);
    inputArrayOne.push(input);
    numOne = parseFloat(inputArrayOne.join(""));
    output.innerHTML = numOne;
  } else {
    inputArrayTwo.push(input);
    numTwo = parseFloat(inputArrayTwo.join(""));
    output.innerHTML = numTwo;
  }

  console.log(inputArrayOne, inputArrayTwo, numOne, numTwo, symbol);
};

const getMethod = (id) => {
  getEquation();
  symbol = document.getElementById(id).value;
  console.log(symbol);
};

const equationReset = () => {
  inputArrayTwo = [];
  numTwo = 0;
};

const getEquation = () => {
  switch (symbol) {
    case "*":
      numOne = numOne * numTwo;
      equationReset();
      break;

    case "/":
      numOne = numOne / numTwo;
      equationReset();
      break;

    case "+":
      numOne = numOne + numTwo;
      equationReset();
      break;

    case "-":
      numOne = numOne - numTwo;
      equationReset();
      break;
  }
  output.innerHTML = numOne;
};
