let person1 = { name: "Vlad", age: 34 };
let person2 = { name: "Marie", age: 33 };

let sayHi = function () {
  console.log("Hi, " + this.name);
};

sayHi.call(person1);
sayHi.call(person2);
sayHi();

let sayHello = function (message) {
  console.log(message + ", " + this.name);
};

sayHello.call(person1, "Hello");
sayHello.call(person2, "Hola");
sayHello();
