'use strict';

// These 2 should be interchangeable!
const List = require('../list-constructor.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.push('e');
    stuff.push('f');
    stuff.push('g');

    expect(stuff.length).toEqual(7);
    expect(stuff.data[6]).toEqual('g');
  });

  it('pops items at the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.push('e');
    stuff.push('f');
    stuff.push('g');

    stuff.pop();
    stuff.pop();
    stuff.pop();

    expect(stuff.length).toEqual(4);
    expect(stuff.data[6]).toBeUndefined();
  });

  it('shifts items at the start of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.push('e');
    stuff.push('f');
    stuff.push('g');

    console.log(stuff.data);
    stuff.shift(3);
    console.log(stuff.data);

 
    expect(stuff.length).toEqual(4);
    expect(stuff.data[3]).toBe('d');
  });

  it('unshifts items at the start of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.push('e');
    stuff.push('f');
    stuff.push('g');

    console.log(stuff.data);
    stuff.unshift('k');
    stuff.unshift('l');
    stuff.unshift('m');
    console.log(stuff.data);

 
    expect(stuff.length).toEqual(10);
    expect(stuff.data[0]).toBe('m');
  });

});
