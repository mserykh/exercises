let number2 = 10;

function generateNumber() {
  let number1 = 25;
  let result = function () {
    let sum = number1 + number2;
    return sum;
  };
  return result();
}

generateNumber();
console.log(generateNumber());
