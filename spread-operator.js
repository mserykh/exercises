function greet(person1, person2) {
  console.log("Hi " + person1 + " and " + person2 + "!");
}

let names = ["Marie", "Vlad"];
greet(...names);

function display(char1, char2, char3, char4, ...others) {
    console.log(others);
  console.log(char1, char2, char3, char4);
}

let letters = "abcdljnkjllkj";

display(...letters);
