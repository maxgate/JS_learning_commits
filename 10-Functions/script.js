'use strict';

/*
////////////////////////////////////////
//Default Parameters
const bookings = [];

const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 2);
creatBooking('LH123', 5);
creatBooking('LH123', undefined, 800);
*/
/*
const flight = 'LH234';
const max = {
  name: 'Max Vincent',
  passport: 2345678556754,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. passenger.name';

  if (passenger.passport === 2345678556754) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, max);
// console.log(flight);
// console.log(max);

// Is the same as doing...
// const flightNum = flight;
// const passenger = max;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(max);
checkIn(flight, max);
*/

/*
//////////////////////////////////////////////
// function Accepting callback functions
const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformer by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneword);

// JS uses callback all the time
const high5 = function () {
  console.log('=>');
};
document.body.addEventListener('click', high5);
['Max', 'Jonas', 'Jane'].forEach(high5);
*/

////////////////////////////////////
// Functions Returning Fuctions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hey');
greetingHey('Max');
greetingHey('Steven');

greet('Hello')('Max');
