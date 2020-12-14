
function getMilk(money, costOfBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log(`buy ${calcBottles(money, costOfBottle) } bottels of milk`);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money, costOfBottle);
}

function calcBottles(startingMoney, costOfBottle) {
  let bottlesCanBuy = startingMoney / costOfBottle;
  let numberOfbottels = Math.floor(bottlesCanBuy);
  return numberOfbottels;
}

function calcChange(startingMoney, costOfBottle) {
  let change = startingMoney % costOfBottle;
  return change;
}
console.log(`Hello master, here is your ${getMilk(5, 3)} dollars changes.`);
