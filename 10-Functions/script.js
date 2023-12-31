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
/*
////////////////////////////////////
// Functions Returning Fuctions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// using arrow functions
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

// in a shorter way
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greetingHey = greet('Hey');
greetingHey('Max');
greetingHey('Steven');

greet('Hello')('Max');
greetArr('Hi')('Max');
*/

/*
////////////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
console.log(lufthansa);
lufthansa.book(239, 'Max Vincent');
lufthansa.book(209, 'james Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// // doest NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 24, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 213, 'Joy cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// use instead of apply
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(273, 'Stella Kelvin');
bookLX(29, 'Adams Jobs');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Max Vincent');
bookEW23('Martha Cooper');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxx = rate => {
  return value => {
    return value + value * rate;
   };
};
const addVat = addTaxx(0.1);

console.log(addVat(200));
*/

/*
/////////////////////////////////////////
// Coding Challenge

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Resgister answer
    typeof answer === 'number' &&
      answer < this.answer.length &&
      this.answer[answer]++;

    this.displayResults();
    this.displayResults('strings');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
//IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

// using Arrow function
(() => {
  console.log('This will never run again');
})();

{
  const isPrivate = 23;
  var notPrivate = 34;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
/*
/////////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// more Closure exammples
// Example 1
let f;

const g = function () {
  const a = 24;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

/////////////////////////////////////////
// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

