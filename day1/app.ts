//primitives data types
//string "hello"
//number 23
//char p
//null
//undefined

//reference or non primitive
//arrays []
//objects{}
//whenever we make change in child there is also change in parent

//number
let num: number = 12;

//string
let word: string = "hello";

//boolean
let tell: boolean = true;

//tuple
let arr: [number, string] = [5, "hello"];

//enumerations
enum userRole {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

//userRole.ADMIN

//any
let b;
b = "str";

//void: function who return nothing
function abcd(): void {
  console.log("hello");
}

//null
let c: null;
// c= 3; we cannot do this

//undefined
let d: undefined;

//never
//if we set function to never then the console will never run or executed;
function def(): never {
  while (true) {}
}

def();
console.log("hello");
