function makeCounter(value) {
  return function () {
    return value++;
  };
}

let counter1 = makeCounter(12);
counter1();


let counter2 = makeCounter(counter1());
console.log(counter2());
