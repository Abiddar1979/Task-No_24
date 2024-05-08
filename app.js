/* Task # 24 : More Conditional tests: You dont have to limit the number of tests you
creat to 10.If you want to try more comparision , write more tests.Have at least one
true and one False result for each of the following ;*/
var str1 = "Asad";
var str2 = "Sabtain";
var num1 = 7;
var num2 = 15;
var Arr = [1, 2, 3, 4, 5];
// Tests for equality and inequality  with strings
console.log("Test for equality and ininquality with strings. ");
console.log(str1 === "Asad");
console.log(str1 === str2);
// Tests using the lower case function
console.log("\n Test using the lower case function:");
console.log(str1.toLowerCase() === "asad");
console.log(str2.toLowerCase() !== "sabtain");
// Numerical tests
console.log("\n Numirecal tests:");
console.log(1 > 2);
console.log(num1 >= num2);
console.log(num1 === 7);
console.log(num2 !== 15);
// Teast using "and" and "or" operators
console.log("\n Test using `and` and `or` operators:");
console.log((num1 < 15) && (num2 > 7));
console.log((num1 < 5) || (num2 > 20));
// Test weather an item is in an array
console.log("\n Test weather an item is in an arry:");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
// Test weather an item is not in an array
console.log("Test weather an item is not in an array:");
console.log(Arr.includes(6));
console.log(Arr.includes(2));
