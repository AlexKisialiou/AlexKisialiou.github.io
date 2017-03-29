//function isArray
function isArrayByInstance(arr) {
  return arr instanceof Array;
}

function isArrayByPrototype(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function isArrayByDuckTyping(arr) {
  if (arr.splice) {
    return true;
  }
  return false;
}
//function range
function range(start, end, multiply) {
  function createArray(start, end, multiplay) {
    let array = [];
    for (start; start <= end; start += multiplay) {
      array.push(start);
    }
    return array;
  }
  let arr = [];
  multiply = multiply || 1;
  if (end === undefined) {
    arr = createArray(0, (start - 1), multiply);
  } else {
    arr = createArray(start, end, multiply);
  }
  return arr;
}
//function compact
function compactWithoutCycle(array) {
  return array.filter(function(item) {
    return item;
  });
}

function compactWithCycle(array) {
  let arrayTrue = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arrayTrue.push(array[i]);
    }
  };
  return arrayTrue;
}
//function sum
function sumWithCycle(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function sumWithoutCycle(array) {
  return array.reduce(function(sum, current) {
    return sum + current;
  });
}
//function unique
function uniqueWithInnerCycle(array) {
  let arrayUnique = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayUnique.indexOf(array[i]) == -1) {
      arrayUnique.push(array[i]);
    }
  }
  return arrayUnique;
}

function uniqueWithMethods(array) {
  return array.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
}

function uniqueWithObject(a) {
  var prims = {
      "boolean": {},
      "number": {},
      "string": {}
    },
    objs = [];
  return a.filter(function(item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
    else return objs.indexOf(item) == 0 ? false : objs.push(item);
  });
}
//function last
function lastWithLength(array) {
  return array[array.length - 1];
}

function lastWitSlice(array) {
  return array.splice(-1).join();
}
//function exclude
function excludeLastWithCycle(array, number) {
  number = number || 1;
  let arrayExclude = [];
  for (let i = 0; i < (array.length - number); i++) {
    arrayExclude.push(array[i]);
  }
  return arrayExclude;
}

function excludeLastWithoutCycle(array, number) {
  number = number || 1;
  return array.splice(0, array.length - number);
}

console.log('------Check function isArray------');
console.log(isArrayByInstance([]));
console.log(isArrayByInstance({}));
console.log(isArrayByPrototype([]));
console.log(isArrayByPrototype({}));
console.log(isArrayByDuckTyping([]));
console.log(isArrayByDuckTyping({}));
console.log('------Check function range------');
console.log(range(10));
console.log(range(1, 5));
console.log(range(1, 20, 3));
console.log('------Check function compact------');
console.log(compactWithCycle([true, 1, 0, {},
  [], false, null, 15, 0, false
]));
console.log(compactWithoutCycle([true, 1, 0, {},
  [], false, null, 15, 0, false
]));
console.log('------Check function sum------');
console.log(sumWithCycle([1, 2, 3, 4, 5]));
console.log(sumWithoutCycle([1, 2, 3, 4, 5]));
console.log('------Check function unique------');
console.log(uniqueWithInnerCycle([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y', {}, {
  b: 1
}]));
console.log(uniqueWithObject([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y', {}, {
  b: 1
}]));
console.log(uniqueWithMethods([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y', {}, {
  b: 1
}]));
console.log('------Check function last------');
console.log(lastWithLength([1, 2, 3, 4, 10]));
console.log(lastWitSlice([1, 2, 3, 4, 10]));
console.log('------Check function exclude------');
console.log(excludeLastWithCycle([1, 2, 3, 4, 10]));
console.log(excludeLastWithCycle([1, 2, 3, 4, 10], 2));
console.log(excludeLastWithoutCycle([1, 2, 3, 4, 10]));
console.log(excludeLastWithoutCycle([1, 2, 3, 4, 10], 2));
