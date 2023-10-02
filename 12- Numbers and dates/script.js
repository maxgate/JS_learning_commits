//////////////////////////////////////
/* NUMBERS AND DATES 
Learning how numbers work in Javascript, how to convert values to numbers and how to check if certain values have number or not.

Notes: 
1 . In Javasript numbers are represented internally as a floating point numbers (i.e a decimal).

2. Numbers are represented internally in a 64 base 2 format (numbers are always stored in a binary format. 0 & 1)
*/

/*
/////////////////////////////////
// CONVERTING AND CHECKING NUMBERS

// converting string to number
console.log(Number("23"));
console.log(+"23");

// parsing number from a string
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e30", 10));

console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseInt("2.5rem"));

// console.log(parseFloat("2.5rem"));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(20 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

///////////////////////////////////////
// MATH AND ROUNDING

/*
// Calculating square root

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// finding the maximum Number
console.log(Math.max(5, 18, 23, 2));
console.log(Math.max(5, 18, "23", 2));
console.log(Math.max(5, 18, "23px", 2));

// finding the minimum Number
console.log(Math.min(5, 18, 23, 2));

// using math method with constant value

console.log(Math.PI * Number.parseFloat("10px") ** 2); // finding the area of a circle with a radius of 10

// finding a Random number
console.log(Math.trunc(Math.random() * 6) + 1);

// creating a function that will return a Random number b/w two integers
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max -min) -> min...max
// console.log(randomInt(10, 20));

////////////////////////////////
// ROUNDING INTEGERS
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/

/*
//////////////////////////////////
// REMAINDER OPERATOR

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(7 % 2);
console.log(7 % 2);

// checking if a number is an even mumber
const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

/////////////////////
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements_row")].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = "organgered";
    // 0, 3, 5, 9
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});
*/

/* 
////////////////////////////////////////////
// NUMERIC SEPARATORS
// Introduce in ES2021

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

// not to be used on strings
console.log(Number("230_000"));
console.log(parseInt("230_000"));
*/

/*
///////////////////////////////////
// Working with BIGINT
// Introduce in ES2020

// calculating the number of the safe integer
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// creating BIGINT
console.log(25354444657576868697969594948373726n);
console.log(BigInt(2535444465757));

// Operations
console.log(10000n + 10000n);
console.log(25354444657576868697969594948373726n * 1000000n);

const huge = 3544446575768686979695949n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);

console.log(huge + " is REALLY big!!!");

// Division
console.log(11n / 3n);
console.log(10 / 3);
*/

////////////////////////////////////////////
// CREATING DATES

// creat a date
const now = new Date();
console.log(now);

console.log(new Date(0));
