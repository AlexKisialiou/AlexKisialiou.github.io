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
  multiply = multiply || 1;
  let array = [];
  if (end == undefined) {
    end = start;
    start = 0;
  }
  let arrayLeng = multiply > 0 ? end - start : start - end;
  if (multiply > 0) {
    for (let i = start; i < arrayLeng + start; i += multiply) {
      array.push(i);
    }
  } else {
    for (let i = arrayLeng + end; i > end; i += multiply) {
      array.push(i);
    }
  }
  return array;
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
  let arrayExclude;
  number = number || 1;
  if (number < 0) {
    arrayExclude = array.slice(-number);
  } else {
    arrayExclude = array.slice(0, array.length - number);
  }
  return arrayExclude;
}

console.log('------Check function isArray------');
console.log(isArrayByInstance([]));
console.log(isArrayByInstance({}));
console.log(isArrayByPrototype([]));
console.log(isArrayByPrototype({}));
console.log(isArrayByDuckTyping([]));
console.log(isArrayByDuckTyping({}));
console.log('------Check function range------');
console.log('(10)=', range(10));
console.log('(1,10)=', range(1, 10));
console.log('(10,1, -1)=', range(10, 1, -1));
console.log('(1,10,3)=', range(1, 10, 3));
console.log('(10,null,3)=', range(10, null, 3));
console.log('(10,null)=', range(10, null));
console.log('(-2,-5)=', range(-2, -5));
console.log('(-5,-2)=', range(-5, -2));
console.log('(-5,-2,2)=', range(-5, -2, 2));
console.log('(-5,-2,-2)=', range(-5, -2, -2));
console.log('(-5,null,2)=', range(-5, null, 2));
console.log('(-5,null,-2)=', range(-5, null, -2));
console.log('(-10,-20,-5)=', range(-10, -20, -5));
console.log('(-20,-10,-5)=', range(-20, -10, -5));
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
console.log(lastWithLength([1, 2, 3, 4, 10]));
console.log('------Check function exclude------');
console.log(excludeLastWithCycle([1, 2, 3, 4]));
console.log(excludeLastWithCycle([1, 2, 3, 4], 2));
console.log(excludeLastWithoutCycle([1, 2, 3, 4]));
console.log(excludeLastWithoutCycle([1, 2, 3, 4], 2));
console.log(excludeLastWithoutCycle([1, 2, 3, 4], -1));
console.log(excludeLastWithoutCycle([1, 2, 3, 4], -2));
