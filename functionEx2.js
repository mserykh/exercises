function bmiCalculator(weight, height) {
  let bmiCalc = weight / (height * height);
  return Math.floor(bmiCalc);
}

let bmi = bmiCalculator(65, 1.8);
console.log(bmi);
