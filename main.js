let inputArrayOne = [];
let inputArrayTwo = [];
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let symbol;

const getReset = () => {
  inputArrayOne = [];
  inputArrayTwo = [];
  numOne = 0;
  numTwo = 0;
  numThree = 0;
  symbol = undefined;
  document.getElementById("output").innerHTML = numOne;
};

const getInput = (id) => {
  let input = document.getElementById(id).value;

  if (input === "clear") {
    getReset();
  } else if (!symbol) {
    inputArrayOne.push(input);
    numOne = parseInt(inputArrayOne.join(""));
    document.getElementById("output").innerHTML = numOne;
  } else {
    inputArrayTwo.push(input);
    numTwo = parseInt(inputArrayTwo.join(""));
    document.getElementById("output").innerHTML = numTwo;
  }
};

// const inputToNumber = (array, num) => {
//   num = parseInt(array.join(""));
//   return (document.getElementById("output").innerHTML = num);
// };

const getMethod = (id) => {
  symbol = document.getElementById(id).value;
  console.log(symbol);
};

const getEquation = () => {
  switch (symbol) {
    case "*":
      numThree = numOne * numTwo;
      break;

    case "/":
      numThree = numOne / numTwo;
      break;

    case "+":
      numThree = numOne + numTwo;
      break;

    case "-":
      numThree = numOne - numTwo;
      break;
  }

  numTwo = 0;
  document.getElementById("output").innerHTML = numThree;
};
