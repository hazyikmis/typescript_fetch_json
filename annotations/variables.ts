//const apples: number = 5;

//let apples: number = 5; //no need to use like this because of type inference of TypeScript
let apples = 5;
apples = 10;

//let speed: string = 'fast'; //no need to use like this because of type inference of TypeScript
let speed = 'fast';
//let hasName: boolean = true; //no need to use like this because of type inference of TypeScript
let hasName = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built-in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];

//Classes
class Car {}
let car: Car = new Car();

//Object literals

// let point = {
//   x: 10,
//   y: 20
// }
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Functions

// const logNumber = (i) => {
//   console.log(i)
// }
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add2numbers: (a: number, b: number) => number = (
  a: number,
  b: number
) => {
  return a + b;
};

//shorter
const add2numbers2 = (a: number, b: number): number => {
  return a + b;
};

//with type inference
const add2numbers3 = (a: number, b: number) => {
  return a + b;
};

//When to use annotations
//1-Function that returns the "any" type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

//BE CAREFUL: JSON.parse('false') returns false (boolean)
//BE CAREFUL: JSON.parse('3') returns 3 (number)
//BE CAREFUL: JSON.parse('{"value": 5}') returns {value: 5} (object)
//BECAUSE OF THAT JSON.parse() returns "any" type

console.log(coordinates.abcd); //no error shown by TypeScript

const coordinates2: { x: number; y: number } = JSON.parse(json);
//console.log(coordinates2.abcd); //not works!

//2-When we declare a variable on one line and initialize it later

//3-Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
