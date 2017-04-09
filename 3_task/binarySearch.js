function binarySearch(originalArray, number) {
 let array = originalArray;
 let left;
 let right;
 let middle;
 while(array.length >= 1) {
  left = 0;
  right = array.length - 1;
  middle = parseInt((right - left) / 2);
  if (number == array[middle]) {
   return originalArray.indexOf(number);
  }
  else if (number < array[middle]) {
   left = 0;
   right = middle;
  }
  else {
   left = middle + 1;
   right = array.length;
  }
  array = array.slice(left, right);
 }
}
var array = [-10,-10,10,20,21,22,26,30,33,40,50,60,70];
console.log(binarySearch(array, -10));
console.log(binarySearch(array, 70));
console.log(binarySearch(array, 10));
console.log(binarySearch([-10], -10));
console.log(binarySearch([-1,2], 2));
console.log(binarySearch([], 2));
