'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.shift()
let last = stuff.pop();
