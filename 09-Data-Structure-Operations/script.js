'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  thur: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Data needed for a later exercise
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '!!' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

/*
/////////////////////////////////////////////////
// Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const test = document.querySelector('textarea').value;
  const rows = test.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');

    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'@'.repeat(i + 1)}`);
  }
});
*/
/*
/////////////////////////////////////////////
// Working With Strings - part 3
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Max Vincent'.split(' '));

const [firstName, lastName] = 'Max Vincent'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('max vincent');
capitalizeName('jesus christ');

// padding
const message = 'Go to gate 25!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Vicent'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1238897));
console.log(maskCreditCard(987543265783889787));
console.log(maskCreditCard('909857773884774'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${' ready'.repeat(n)}`);
};
planeInLine(5);
planeInLine(3);
planeInLine(12);
*/

/*
///////////////////////////////////////////
// Working With Strings - part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
// using regular expression
console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the NEW ARirbus family');
}

// Practise exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
//////////////////////////////////////////// 
// Working with Strings - part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737');

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
////////////////////////////////////
// Challenge #3

/*
///////////////////////////////////////////////
// Maps: Iterables
const question = new Map([
  ['question', 'what is the best progamming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Converting object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Converting map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
// console.log(question.entries());
*/

/*
////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze', 'Italy');
console.log(rest.set(2, 'Lisbon', 'Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
//////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(new Set('Vincent'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.delete('Risotto'));
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
*/
/*
/////////////////////////////////
// Coding Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/
/*
////////////////////////////////////////
// Looping Objects: Object, K eys, Values and Entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'maxy', email: 'maxy@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
//////////////////////////////////////
// The for-of-Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


// console.log([...menu.entries()]);

////////////////////////////////////////////
// Coding Challenge #1


//1)
const [players1, players2] = game.players;
console.log(players1, players2);

// 2)
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3)
const allplayers = [...players1, ...players2];
console.log(allplayers);

// 4)
const players1final = [...players1, 'Thiago', 'Courtinho', 'Perisic'];
console.log(players1final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length}goals were scored`);
};

// printGoals('Muller', 'Gnarby', 'Lewandowski');
// printGoals('Gnarby', 'Lewandowski');
printGoals(...game.scored);

// 7)
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*
/////////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*
const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La piazza',
  owner: 'maxy vincy',
};
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
////////////////////////////////////
// Short-Circuiting (&& and ||)

console.log('____OR___');
// Use Any data type, return Any data type, short-circuiting

console.log(3 || 'max');
console.log('' || 'max');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('____AND___');
console.log(0 && 'max');
console.log(7 && 'max');

console.log('hello' && 23 && null && 'max');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'Spinach', 'fish');
*/

/*
/////////////////////////////////////////
//Rest Pattern and Parameters
// 1) Destructuring

// SPREAD,  because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(numbers);
  console.log(sum);
};

add(2, 3);
add(5, 3, 4, 2, 5);
add(4, 5, 5, 2, 4, 6, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach'); 
*/

/*
// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Vincent';
const letters = [...str, '', 'K'];
console.log(letters);
console.log(...str);

// Real world example
const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
  foundedIn: 1999,
  ...restaurant,
  founder: 'maxy',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Abia Umuahia';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

const { name1, openingHours, categories } = restaurant;
console.log(name1, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Object

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
///////////////////////////////////////////
// Destructing Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
