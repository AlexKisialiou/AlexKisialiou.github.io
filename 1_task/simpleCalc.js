/**
 * Created by Alex on 17.03.2017.
 */
function addition(a, b) {
  return a + b;
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
  return parseInt(division(a, b), 10);
}
console.log("--------addition-----------");
console.log(addition(1, 2));
console.log(addition(1, "2"));
console.log(addition("1", "2"));
console.log(addition(1, "two"));
console.log(addition("1", "two"));
console.log(addition(1, false));
console.log(addition("1", true));
console.log(addition(1, {}));
console.log(addition());
console.log(addition(1));
console.log(addition(1, 2, 5));
console.log("--------subtraction-----------");
console.log(subtraction(1, 2));
console.log(subtraction(1, "2"));
console.log(subtraction(2, "two"));
console.log(subtraction("1", "two"));
console.log(subtraction(1, false));
console.log(subtraction("1", true));
console.log(subtraction(1, {}));
console.log(subtraction("-10", true));
console.log(subtraction());
console.log(subtraction(1));
console.log(subtraction(1, 2, 5));
console.log("--------multiplication-----------");
console.log(multiplication(1, 2));
console.log(multiplication(1, "2"));
console.log(multiplication(2, "two"));
console.log(multiplication("1", "two"));
console.log(multiplication(1, false));
console.log(multiplication("1", true));
console.log(multiplication(1, {}));
console.log(multiplication("-10", true));
console.log(multiplication());
console.log(multiplication(1));
console.log(multiplication(1, 2, 5));
console.log("--------division-----------");
console.log(division(1, 2));
console.log(division(1, "2"));
console.log(division(2, "two"));
console.log(division("1", "two"));
console.log(division(1, false));
console.log(division("1", true));
console.log(division(1, {}));
console.log(division("-10", true));
console.log(division());
console.log(division(1));
console.log(division(1, 2, 5));
console.log("--------integerDivision-----------");
console.log(integerDivision(1, 2));
console.log(integerDivision(1, "2"));
console.log(integerDivision(2, "two"));
console.log(integerDivision("1", "two"));
console.log(integerDivision(1, false));
console.log(integerDivision("1", true));
console.log(integerDivision(1, {}));
console.log(integerDivision("-10", true));
console.log(integerDivision());
console.log(integerDivision(1));
console.log(integerDivision(1, 2, 5));
