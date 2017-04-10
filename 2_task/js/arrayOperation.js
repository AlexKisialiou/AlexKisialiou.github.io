var arrayOperation = (function() {
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
  function createArray(start, end, multiplay) {
    let array = [];
    if (start < end) {
      for (start; start <= end; start += multiplay) {
        array.push(start);
      }
    } else {
      for (start; start >= end; start -= multiplay) {
        array.push(start);
      }
    }
    return array;
  }

  function range(start, end, multiply = 1) {
    let arr = [];
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
      return (Boolean(item) == true);
    });
  }

  function compactWithCycle(array) {
    let arrayTrue = [];
    for (let i = 0; i < array.length; i++) {
      if (Boolean(array[i]) == true) {
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
    nextInput:
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < arrayUnique.length; j++) {
          if (array[i] === arrayUnique[j]) continue nextInput;
        }
        arrayUnique.push(array[i]);
      };
    return arrayUnique;
  }

  function uniqueWithObject(array) {
    let easyObject = {};
    let arrayUnique = [];
    for (let i = 0; i < array.length; i++) {
      easyObject[array[i]] = true;
    }
    for (let key in easyObject) {
      arrayUnique.push(key);
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

  function lastWithPop(array) {
    let last = array.pop();
    array.push(last);
    return last;
  }
  //function exclude
  function excludeLastWithCycle(array, number = 1) {
    for (let i = 0; i < number; i++) {
      array.pop();
    }
    return array;
  }

  function excludeLastWithoutCycle(array, number = 1) {
    array.length = array.length - number;
    return array;
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
  console.log(uniqueWithInnerCycle([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y']));
  console.log(uniqueWithObject([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y']));
  console.log(uniqueWithMethods([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 't', 'y']));
  console.log('------Check function last------');
  console.log(lastWithLength([1, 2, 3, 4, 10]));
  console.log(lastWithPop([1, 2, 3, 4, 10]));
  console.log('------Check function exclude------');
  console.log(excludeLastWithCycle([1, 2, 3, 4, 10]));
  console.log(excludeLastWithCycle([1, 2, 3, 4, 10], 2));
  console.log(excludeLastWithoutCycle([1, 2, 3, 4, 10]));
  console.log(excludeLastWithoutCycle([1, 2, 3, 4, 10], 2));
})();
