var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };
  return add;
};

var addThree = addTo(3);
var addFour = addTo(4);

console.log(addThree(1));
console.dir(addThree(1));

let f;
if (true) {
  let i = 1;
  f = () => console.log(i);
}

f();

let f1 = function () {
  let i = 21;
  return console.log(i);
};

f1();

var walk = function () {
  var dist = "1700 feet";
  var fly = function () {
    console.log("At " + dist);
  };
  return fly;
};

var flyFunc = walk();
flyFunc();

