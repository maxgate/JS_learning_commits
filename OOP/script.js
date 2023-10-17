'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   // never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const max = new Person('max', 1991);
console.log(max);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticall return {}

const pinky = new Person('Pinky', 2004);
const james = new Person('James', 2000);
console.log(pinky, james);

console.log(max instanceof Person);

// Static method
Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};
Person.hey();

///////////////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

max.calcAge();
pinky.calcAge();

console.log(max.__proto__);
console.log(max.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(max));
console.log(Person.prototype.isPrototypeOf(Person));

// .PrototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(max.species, pinky.species);

console.log(max.hasOwnProperty('firstName'));
console.log(max.hasOwnProperty('species'));

console.log(max.__proto__);
// Object.prototype (top of prototype chain)
console.log(max.__proto__.__proto__);
console.log(max.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

/*
//////////////////////////////////////////////
// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake(); 
bmw.accelerate();
*/
/*
/////////////////////////////////////
// ES6 CLASSES

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // Instance method
  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// points to NOTE about CLASSES
// 1. Classes are NOT hoisted
// 2. Classes are executed in strict mode
// 3. Classes are first-class citizens

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

//////////////////////// /////////////////
// SETTERS AND GETTERS

const account = {
  owner: 'jonas',
  movements: [200, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
///////////////////////////////////////////
// OBJECT.CREATE
const PersonPrpto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonPrpto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonPrpto);

const sarah = Object.create(PersonPrpto);
sarah.init('sarah', 1979);
sarah.calcAge();

/* 
///////////////////////////////////////////////
// Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.speedUs = 50;
console.log(ford);
*/