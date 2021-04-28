const CoffeeMake = function() {};

CoffeeMake.prototype.on = function () {
  console.log(this.name + " is on");
};
CoffeeMake.prototype.off = function () {
  console.log(this.name + " is off");
};

const CoffeeMachine = function (name, prise) {
  this.name = name;
  this.prise = prise;
  this.showName = function () {
    console.log(this.name);
  };
  this.showPrise = function () {
    console.log(this.prise);
  };
};

CoffeeMachine.prototype = CoffeeMake.prototype; 

const dripCoffee = new CoffeeMachine("RZTK CM255К", "100$");
const carobCoffee = new CoffeeMachine("DeLonghi ECO311 ", "500$");
const espressoMachine = new CoffeeMachine("DeLonghi EC155", "2000$");

dripCoffee.on();
carobCoffee.off();
espressoMachine.showPrise();
console.log(dripCoffee);