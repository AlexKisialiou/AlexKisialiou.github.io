/**
 * Created by Alex on 17.03.2017.
 */

function addition(a, b) {
    return +a + +b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function integerDivision(a, b) {
    var fraction = division(a, b);
    return  fraction - (fraction % 1) ;
}

console.log(addition(1, -4));
console.log(addition(1, "2"));
console.log(addition("5", "2"));
console.log(addition(false, true));
console.log(addition(false, {}));
console.log(addition(1, "one"));
console.log(addition());
console.log(addition(1));
console.log(addition(1, 4, 5));
console.log(subtraction(1, -10));
console.log(subtraction(1, "-10"));
console.log(subtraction("-10", "-10"));
console.log(multiplication(3, 2));
console.log(division(13, 3));
console.log(integerDivision(13, 3));
