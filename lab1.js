'use strict';

(function helperFunctions() {
  Number.prototype.str = function () {
    return this.toString();
  };

  Array.prototype.logout = function (shouldLog) {
    if (shouldLog) {
      console.log('current array is');
      console.log(this);
    }
    return this;
  };

  Object.filter = function (obj, predicate) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && predicate(obj[key])) {
        result[key] = obj[key];
      }
    }

    return result;
  };
})();

const printLine = (val, msg) => {
  console.log(msg + ':');
  console.log(Array.isArray(val) ? val.join(' ') : val);
  console.log('======================');
};

// Actual task

const arr = [3, 0, 10, -1, 0, 4, 5, 6, 3, 7, 7]; // [3, 0, 10, -1, 0, 4, 5, 6, 3, 7, 7, 12, 5, 10, 10, 0, 32, 4, -5];
printLine(arr, 'initial array');

// length of elements equal to 0
const one = arr.filter((x) => x === 0).length;
printLine(one, 'length of elements equal to 0');

// elements * some number (e.g. 2)
const two = arr.map((x) => x * 2);
printLine(two, 'elements * some number (e.g. 2)');

// absolutely even elements nullified
const three = arr.map((x) => (Math.abs(x) % 2 ? 0 : x));
printLine(three, 'absolutely even elements nullified');

// only elements which have a value-copy in array
const reduced = arr.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.str()]: acc[cur.str()] ? acc[cur.str()] + 1 : 1,
  }),
  {}
);
const four = Object.keys(
  Object.filter(reduced, (prop) => prop > 1)
).map((strValue) => Number(strValue));
printLine(four, 'only elements which have a value-copy in array');

// elements + their index
const five = arr.map((x, i) => x + i);
printLine(five, 'elements + their index');
