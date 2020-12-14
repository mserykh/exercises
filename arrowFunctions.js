/*
let greetings = function() {
    return "Hello World";
}

let message = greetings();
console.log(message);
*/
let greetings = () => "Hello World";
let message = greetings();
console.log(message);


/*
let greet = function greeting(name) {
    return "Hello " + name;
};

let myMessage = greet("John");
console.log(myMessage);
*/
let greeting = (name) => "Hello " + name;
let myMessage = greeting("John");
console.log(myMessage);
