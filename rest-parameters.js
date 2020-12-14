let sayHello =  function greetAll(...names) {
    names.forEach((name) => console.log("Hi, " + name));
  };
  
  sayHello("Marie", "Vlad", "Amsterdam");
  
  
  let welcome = function greetAll(message, ...names) {
      console.log(message + " everyone!");
      names.forEach(name => console.log("Hi, " + name));
  };
  
  welcome("Welcome", "Marie", "Vlad", "Amsterdam");