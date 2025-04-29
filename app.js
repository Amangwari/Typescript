"use strict";
// ==> Primitve types in ts
var a = 12;
let b = 34;
console.log(a);
function sum(a, b) {
    let total = a + b;
    console.log(total);
}
sum(a, b);
// ==> Arrays in TS
let arr = [1, 2, 3, 4, 5, 6, "Aman", { name: "ass" }, { name: 98 }]; // array of number or object with string or object with number
// -- to stop this behaviour we use 
// let arr2:number[] = [1,2,3,4,5,6,7, "asjf"] // will give error coz this is a aray of number only
let person = ["Priya", 30, true];
console.log(person[0]); // "Priya" (string)
console.log(person[1]); // 30 (number)
console.log(person[2]);
// ==> Enums 
// Example (Numeric Enum):
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
    Status[Status["Failed"] = 3] = "Failed";
})(Status || (Status = {}));
let taskStatus = Status.InProgress;
console.log(taskStatus); // Output: 1
console.log(Status[2]); // Output: "Completed" (reverse mapping)
//   Example (String Enum):
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let move = Direction.Right;
console.log(move); // Output: "RIGHT"
// ==> Any
let stringa;
stringa = 6;
stringa = "Aman";
// ==> unknown 
let ag;
ag = 13;
ag = "amang";
console.log(typeof ag == "string");
if (typeof ag == "string") {
    console.log(ag.toUpperCase());
}
// ==> Void
function abcd() {
    console.log("function not returning anyting so initialize it with type void ");
}
abcd();
// ==> Null
let adf = null;
let adf2 = null;
let adf3;
// ==> undefined
let sdf;
// ==> Never
// function infiniteProcess(): never {
//     while (true) {
//         console.log("Processing...");
//     }
//     // This line will never be reached
//     // return "Done"; // Error: Function with 'never' return type cannot have a 'return' statement.
// }
// infiniteProcess(); // This function will run indefinitely, printing "Processing..."
// console.log("hello") // unrechable code 
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// => Type Inference
let acc = 23;
// => Type Annotations
let amm;
amm = 12;
amm = false;
amm = "sfsdf";
// ==> Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersectin Types
// Defining interfaces
const user = {
    name: "Aman",
    email: "aman@gmail.com",
    password: "ksddfoiwhewnv"
};
function abcde(obj) {
    console.log(`${obj.email}_${obj.name}_${obj.password}`);
}
abcde({ name: "aman", email: "amangwari@gmail.com", password: "sndfoen" });
function foo(obj) {
    // here only obj has properties of normaluser
    console.log(`${obj.email}_${obj.name}_${obj.password}`);
}
foo({ name: "aman", email: "amangwari@gmail.com", password: "sndfoen" });
function foo2(obj) {
    // here only obj has properties of normaluser + its own i.e admin
    console.log(`${obj.email}_${obj.name}_${obj.password}_${obj.isAdmin}`);
}
foo2({ name: "aman", email: "amangwari@gmail.com", password: "sndfoen", isAdmin: true });
function newfoo(obj) {
    // here i can access both email and name they got merged 
    console.log(`${obj.name}_${obj.email}`);
}
newfoo({ name: "aman", email: "amangwari@gmail.com" });
let asdfg;
// might looking unsensiblle untill you see below example
let add;
let asadd;
function newfooo(obj) {
    console.log(`${obj}`);
}
newfooo("sdklfjsdfj");
function abcddd(a) {
    console.log(a.age);
    console.log(a.name);
    console.log(a.allowuser);
    // a can aceess all properties of user & itself i.e adming
}
abcddd({ name: "aman", age: 2342, allowuser: true });
// union Types (|)
let valuee;
valuee = "aman";
valuee = 43;
// valuee = false // throw error
