
// ==> Primitve types in ts
var a = 12;
let b = 34;

console.log(a);

function sum(a: number, b: number) {
    let total = a + b;
    console.log(total);
}
sum(a, b);

// ==> Arrays in TS
let arr = [1, 2, 3, 4, 5, 6, "Aman", { name: "ass" }, { name: 98 }] // array of number or object with string or object with number

// -- to stop this behaviour we use 
// let arr2:number[] = [1,2,3,4,5,6,7, "asjf"] // will give error coz this is a aray of number only

let person: [string, number, boolean] = ["Priya", 30, true];

console.log(person[0]); // "Priya" (string)
console.log(person[1]); // 30 (number)
console.log(person[2]);

// ==> Enums 
// Example (Numeric Enum):
enum Status {
    Pending, // Defaults to 0
    InProgress, // Defaults to 1
    Completed, // Defaults to 2
    Failed, // Defaults to 3
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus); // Output: 1
console.log(Status[2]); // Output: "Completed" (reverse mapping)


//   Example (String Enum):
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let move: Direction = Direction.Right;
console.log(move); // Output: "RIGHT"


// ==> Any
let stringa;
stringa = 6;
stringa = "Aman"


// ==> unknown 
let ag: unknown;
ag = 13;
ag = "amang"
console.log(typeof ag == "string");

if (typeof ag == "string") {
    console.log(ag.toUpperCase());
}

// ==> Void
function abcd(): void {
    console.log("function not returning anyting so initialize it with type void ");
}
abcd();

// ==> Null
let adf = null;
let adf2: null = null;
let adf3: null;


// ==> undefined
let sdf: undefined;


// ==> Never
function infiniteProcess(): never {
    while (true) {
        console.log("Processing...");
    }
    // This line will never be reached
    // return "Done"; // Error: Function with 'never' return type cannot have a 'return' statement.
}

infiniteProcess(); // This function will run indefinitely, printing "Processing..."
console.log("hello") // unrechable code 