import { Circle } from "./module";

// #######################################

// Object oriented features
// compile time errors
// great tooling

// typescript -- converted --> javascript

// #######################################

// npx tsc -t es6 hello.ts
// VARIABLE DECLARATION
// javascript var is scoped close to nearest function
var number = 1;
let count; // count: any
count = "hello";
count = true;
count = 2;
let b: String;
let a: any[] = [1, true, "a", false];

enum Color {
  Red = 0, //default value 0
  Green = 1, //default value 1
  Blue = 2, //default value 2
}

let backgroudColor = Color.Blue;
console.log(backgroudColor); // prints hello

// TYPE ASSERTIONS
let message; // type is any
message = "abc";
let endsWithC = (<string>message).charAt(0);
console.log("endsWithC: ", endsWithC);
//charAt is something we do with string not with any

// FUNCTIONS
let dogs = (message) => console.log(message);

//CUSTOM TYPES
let drawPoint = (x, y, a, b, c, d) => {}; //avoid this

let drawPoints = (point: { x: number; y: number }) => {};
drawPoints({ x: 1, y: 2 });
drawPoints({ name: 1, y: 2 }); //gives error

// interface Point {
//   x: number;
//   y: number;
// }

// let drawPointss = (point: Point) => {};

// To follow principal of cohesion in object oriented programming

class Point {
  // private x: number;
  // private y: number;

  constructor(private _x?: number, private _y?: number) {
    //no need to declare variables adn assign values using this
    // this.x = x;
    // this.y = y;
  }
  // we cant create multiple constructors in typescript
  // ? makes opttional
  // if x is optional then y should be option as well
  // all variables on right should be optional

  draw() {
    //default public
    console.log("x: " + this.x);
  }

  drawDistance(another: Point) {
    // ...
  }

  get x() {
    return this.x;
  }

  set x(value) {
    if (value < 0) {
      throw new Error("Cannot be greater than zero");
    }
  }
}

let point = new Point(1, 2);
point.x = 10; //setter
let x = point.x; //getter
point.draw();

// ACCESS MODIFIERS
// 1. PUBLIC
// 2. PRIVATE
// 3. PROTECTED
