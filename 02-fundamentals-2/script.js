"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = audio;
// const private = 1234;
*/

// function fruitProcessor(apples, organges) {
//   const juice = `Juice with ${apples} apples and ${organges} oranges.`;
//   return juice;
// }

// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Arrays

// const friend1 = ["michael", "Steven", "peter"];
// console.log(friend1);
// const years = new Array(1991, 1984, 2008, 2020);

// const firstName = "vin";
// const vin = [firstName, "max", 2037 - 1919, "programmer", friend1];
// console.log(vin);

// const mark = {
//   fullName: "Mark miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const jonh = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// jonh.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fulname}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.lo(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

const max = [
  "max",
  "Vincent",
  2037 - 1990,
  "Enginner",
  ["sam", "vin", "steve"],
  true,
];
const types = [];

for (let i = 0; i < max.length; i++) {
  console.log(max[i], typeof max[i]);

  types.push(typeof max[i]);
}
console.log(types);

const years = [1991, 2007, 1965, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

console.log("------ONLY STRINGS -----");
for (let i = 0; i < max.length; i++) {
  if (typeof max[i] !== "string") continue;

  console.log(max[i], typeof max[i]);
}

// looping through array backwards

for (let i = max.length - 1; i >= 0; i--) {
  console.log(i, max[i]);
}
// creating arrays inside an array 
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
