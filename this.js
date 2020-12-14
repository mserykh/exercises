let message = {
  name: "John",
  regularFunction: function () {
    console.log(this);
    console.log("Hello " + this.name);
  },
  arrowFunction: () => console.log("Hi " + this.name),
};

message.regularFunction();
message.arrowFunction();
console.log(this.name);

let greetings = {};
greetings.sayHi = function () {
  console.log("Hi");
  console.log(this);
};

greetings.sayHi();

