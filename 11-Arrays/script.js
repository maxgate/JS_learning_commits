///////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
//////////////////////////////////////////////////
// Array Methods
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice());
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice(1, -1));
console.log([...arr]);

// SPLICE - deletes - MUTATES THE ORIGINAL ARRAY
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - Mutates the orginal array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// the same like below
console.log(...arr, ...arr2);

// JOIN
 console.log(letters.join('  '));
*/
/*
// AT method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
// the AT method works also on strings
console.log("Vincent".at(0));
console.log("Vincent".at(-1));
*/

/*
///////////////////////////////////////////
// FOREACH METHOD ON ARRAYS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("-----FOR OF -----");
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(` Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-------- FOREACH -----");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/
/*
///////////////////////////////////////////
// FOREACH METHOD ON MAPS

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}, ${value}`);
});

// FOREACH METHOD ON SETS
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/*
//////////////////////////////////////
// Coding Challenge

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([2, 5, 3, 11, 1], [4, 1, 4, 1, 2]);
*/

///////////////////////////////////////
// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE
/*
// MAP METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// using arrow function
const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// using for of loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// using map method
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
*/

/*
/// THE FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// using for loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

// using filter method to create the withrawal arrays
const withdrawals = movements.filter((mov) => mov < 0);

console.log(withdrawals);

// using for of loop
const withdrawalsFor = [];
for (const mov of movements) if (mov < 0) withdrawalsFor.push(mov);

console.log(withdrawalsFor);
*/

/*
///////////////////////////
// THE REDUCE METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// acc --> accumulator
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// using for of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/*
///////////////////////////////////
// Coding Challenge # 2

const calcAverageHumangeAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};
const avg1 = calcAverageHumangeAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumangeAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
//////////////////////////////////////
// Converting from EUR to USD
const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

/*
////////////////////////////////////////////
// Coding Challenge #3

// using Chaining method
const calcAverageHumangeAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumangeAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumangeAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
///////////////////////////////////////
// The FIND Method

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

// using for of loop
let accountFor = "";
for (const acc of accounts)
  if (acc.owner === "Jessica Davis") {
    accountFor = acc;
    console.log(accountFor);
  }
*/

/*
////////////////////////////////////////
// SOME AND EVERY METHOD

/////// SOME
console.log(movements);
// Equality
console.log(movements.includes(-130));

// Condition
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

/////// EVERY
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
////////////////////////////////
//// FLAT AND FLATEMAP
// used when working with nexted arrays
// FLAT
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
////////////////////////////
// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatmap
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
*/

/*
//////////////////////////////////////////
// SORTING ARRAYS

// Sorting with String
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // mutates the orginal arrays
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A ,B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
/////////////////////////////////////////
// MORE WAYS OF CREATING AND FILLING ARRAYS

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(
  document.querySelectorAll(".movements_value"),
  (el) => Number(el.textContent.replace("$", ""))
);
console.log(movementsUI);

const movementsUI2 = [...document.querySelectorAll(".movements_value")];
*/

/*
////////////////////////////////////
// Array METHODS PRACTICE

// exercise 1.
// const bankDepositSum = accounts.map((acc) => acc.movements).flat();
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// exercise 2.
// using reduce as a counter

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

// exercise 3.

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// exercise 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/

///////////////////////////////////////////////
// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bod"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bod's dogs eat too much!";
// "Sarah and John and Michael's dogs eat too little!";

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat to much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat to little!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// Sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted); 
