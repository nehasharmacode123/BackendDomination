// Understanding variables, data types, operators, loops, conditional statements, functions, etc

// variables
// var a = 13;
// let b = 44;

// b = 67;

// primitives and references
// other primitves -> primitives

// var a = 12;
// var c = a;

// () [] {} -> references

// var b = [1,2,3];
// var d = b;

// var d = [...b]//spread operator

// d.pop();

// objects
// var a = { name: "a", type: "plastic" };
// var b = a;

// var b = { ...a };

// b.name = "b";

// operators

// var a = 12;
// var b = 13;

// a * b;

// + - / * %

// var a = 12;
// var b = 13;

// a + b;
// a / b;
// a * b

// && ||

// 12 && 13;
// false && 12;

// user || "Default User";
// 12 || 13;
// 0 || 13 -> 13
// "" || 13 -> 13
// NaN || 13 -> 13
// null || 13 -> 13
// false || 12 -> truthy value
// 0 || 12 -> truthy value

// 0 false undefined NaN null "" document.all -> falsy values

// loop
// for forin forEach while do-while forof

// for(starting; ending; change){

// }

// for (var i = 0; i < 12; i++) {
//   console.log(i);
// }

// var arr = [1, 2, 3, 4];

// arr.forEach(function (value, index) {
//   console.log(value + 2, index);
// });

// forin loop

// var obj = { name: "harsh", age: 25 };

// for (let value in obj) {
//   console.log(value);
//   console.log(obj[value]);
//   console.log(value, obj[value]);
// }

// conditional statement

// if else-if

// 0 false undefined null NaN document.all ""

// if (0) {
//   console.log("hey");
// } else {
//   console.log("not working");
// }

// if (12) {
//   console.log("hey");
// } else {
//   console.log("not working");
// }

// in this case space in truthy value

// if (" ") {
//   console.log("hey");
// } else {
//   console.log("not working");
// }

// if(12>13){

// }
// else if(13>14){

// }
// else if(15>14){

// }
// else{

// }

// ternary operator

// 12 > 13 ? console.log("Hey") : console.log("Hello");

// 14 > 13 ? console.log("yo") : console.log("yoyo");

// function statement

function abcd() {
  //fnc statements
}

// function (){
// anonymous function
// }

() => {
  // fat arrow function
};

(a) => {
  // fat arrow function with one parameter
};

// ()=>{
//     return 12;
// }

() => 12;
