const add = function(first, second) {
  return first + second;
}

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	let result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function() {
  let result = 1
	for (let i = 0; i < arguments[1]; i++) {
    result *= arguments[0];
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
