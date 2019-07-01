'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

List.prototype.pop = function() {
  delete this.data[this.length];
  this.length--;
};

List.prototype.shift = function(times) {
  let startOfList = 0;
  for(let i = 0; i < times; i++) {
    delete this.data[startOfList];
    startOfList++;
    this.length--;
  }

  List.prototype.unshift = function(item) {
    this.data[0] = item;
    this.length++;
  };
};

module.exports = List;
