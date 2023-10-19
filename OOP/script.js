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

/*
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
*/

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

/*
//////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.indrouce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
mike.indrouce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/*
///////////////////////////////////
// Coding Challenge #3
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//  link the protoype
EV.prototype = Object.create(Car.prototype);

EV.prototype.ChargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Telsa', 120, 23);

console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.ChargeBattery(90);
console.log(tesla);
*/

/*
///////////////////////////////////////////
// Inheritance Between "Classess": ES6 Classes

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Aways needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'computer Science');
martha.introduce();
martha.calcAge();
*/

/*
///////////////////////////////////////////
// Inheritance Between "Classes": Object.Create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function() {
  console.log(`My name is ${this.fullname} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'computer science');
jay.introduce();
jay.calcAge(); 
*/

///////////////////////////////////////////
// Another Class Example

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (Instances)
  locale = navigator.language;

  // 2) Private fields (Instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-200)
acc1.deposit(250);
acc1.withdraw(200);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#pin);
// console.log(acc1.#movements);
//////////////////////////////////////////
// Encapsulation: Protected Properties and Methods

// Chaining
acc1.deposit(300).deposit(500).withdraw(50).requestLoan(25000).withdraw(3000);
console.log(acc1.getMovements());
