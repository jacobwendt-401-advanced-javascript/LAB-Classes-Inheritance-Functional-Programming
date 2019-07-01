'use strict';

const { Vehicle } = require("./Vehicle");

const Car = ({ name }) => ({
  Vehicle.call(this, name, 4);
});

Car.prototype = new Vehicle();

const Motorcycle = ({ name }) => ({
  Vehicle.call(this,name, 2);
});

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = CarFactory;