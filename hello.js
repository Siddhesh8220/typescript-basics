// VARIABLE DECLARATION
// javascript var is scoped close to nearest function
var number = 1;
let count; // count: any
count = "hello";
count = true;
count = 2;
let b;
let a = [1, true, "a", false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color["Blue"] = "hello";
})(Color || (Color = {}));
let backgroudColor = Color.Blue;
console.log(backgroudColor); // prints hello
// TYPE ASSERTIONS
let message; // type is any
message = "abc";
let endsWithC = message.charAt(0);
console.log("endsWithC: ", endsWithC);
//charAt is something we do with string not with any
// FUNCTIONS
let dogs = (message) => console.log(message);
//CUSTOM TYPES
let drawPoint = (x, y, a, b, c, d) => { }; //avoid this
let drawPoints = (point) => { };
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
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
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
    drawDistance(another) {
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
export {};
// ACCESS MODIFIERS
// 1. PUBLIC
// 2. PRIVATE
// 3. PROTECTED
