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
  var directionRight = (start < end);
  function createArray(start, end, multiply) {
    let array = [];
    if (directionRight) {
      for (start; start < end; start += multiply) {
        array.push(start);
      }
    }
    else {
      for (start; start > end; start += multiply) {
        array.push(start);
      }
    }
    return array;
  }
  let arr = [];
  if (end === undefined && multiply === undefined) {
    directionRight = true;
    arr = createArray(0, (start), 1);
  } else {
    var defaultMultiply = directionRight ? 1 : -1;
    multiply = multiply || defaultMultiply;
    var validate = directionRight ? multiply > 0 : multiply < 0;
    if (!validate) {
      return arr;
    }
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

//function last
function lastWithLength(array) {
  return array[array.length - 1];
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
  return array.slice(0, array.length - number);
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
console.log(range(5, 5));
console.log(range(1, 20, 3));
console.log(range(1, 20, -3));
console.log(range(20, 10));
console.log(range(20, 1, -3));
console.log(range(20, 1, 3));
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
console.log(uniqueWithMethods([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y', {}, {
  b: 1
}]));
console.log('------Check function last------');
console.log(lastWithLength([1, 2, 3, 4, 10]));
console.log('------Check function exclude------');
console.log(excludeLastWithCycle([1, 2, 3, 4, 10]));
console.log(excludeLastWithCycle([1, 2, 3, 4, 10], 2));
console.log(excludeLastWithoutCycle([1, 2, 3, 4, 10]));
console.log(excludeLastWithoutCycle([1, 2, 3, 4, 10], 2));
