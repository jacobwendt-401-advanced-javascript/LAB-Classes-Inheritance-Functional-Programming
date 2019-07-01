'use strict';

const { Vehicle } = require("./Vehicle");

class Car {
  constructor(name) {
    Vehicle.call(this, name, 4);
  }
}

Car.prototype = new Vehicle();

class Motorcycle {
  constructor(name) {
    Vehicle.call(this, name, 2);
  }
  wheelie() {
    return 'Wheee!';
  }
}

Motorcycle.prototype = new Vehicle();


module.exports = { Car, Motorcycle };