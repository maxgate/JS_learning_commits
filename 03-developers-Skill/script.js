// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x == 23) console.log('23');

// const calcAge = birthYear => 2032 - birthYear;

// console.log();

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== 'number') continue;

//     if (curtemp > max) max = curtemp;
//     if (curtemp < min) min = curtemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude([36, 51, 10, 'come', 15, 21, 20]);
// console.log(amplitude);

// //problem2
// // Merge two arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== 'number') continue;

//     if (curtemp > max) max = curtemp;
//     if (curtemp < min) min = curtemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew(
//   [36, 51, 10, 15, 21, 20],
//   [6, 5, 8, 10]
// );
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   console.log(measurement);
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// using a debugger

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== 'number') continue;

//     if (curtemp > max) max = curtemp;
//     if (curtemp < min) min = curtemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug(
//   [36, 51, 10, 15, 21, 20],
//   [6, 5, 8, 10]
// );
// console.log(amplitudeBug);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}c in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);
