function introduction(name, profession) {
  console.log("My name is " + name + " and I am a " + profession + ".");
  console.log(this);
}
let marie = ["Marie", "frontend developer"];
introduction("Vlad", ".NET developer");
introduction.apply(undefined, ["Marie", "frontend developer"]);
introduction.call(undefined, "James", "artist");