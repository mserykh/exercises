let name = prompt("What is you name?");
let capitalisedName =
  name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
let message = "Hello " + capitalisedName;
alert(message);
