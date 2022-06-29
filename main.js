let inputArray = [];
let numOne = 0;
let numTwo = 2;

const getInput = (id) => {
  let input = document.getElementById(id).value;

  if (input === "clear") {
    inputArray = [];
  } else {
    inputArray.push(input);
  }
  document.getElementById("output").innerHTML = inputArray.join("");
  console.log(inputArray);
};

const getEquation = (id) => {
  numOne = parseInt(inputArray.join(""));
  let method = document.getElementById(id).value;

  if (method === "*") {
    let result = numOne * numTwo;
    console.log(result);
  }
};
