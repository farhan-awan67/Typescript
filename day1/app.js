"use strict";
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
let num = 12;
//string
let word = "hello";
//boolean
let tell = true;
//tuple
let arr = [5, "hello"];
//enumerations
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["GUEST"] = "guest";
    userRole["SUPER_ADMIN"] = "super_admin";
})(userRole || (userRole = {}));
//userRole.ADMIN
//any
let b;
b = "str";
//void: function who return nothing
function abcd() {
    console.log("hello");
}
//null
let c;
// c= 3; we cannot do this
//undefined
let d;
//never
//if we set function to never then the console will never run or executed;
function def() {
    while (true) { }
}
def();
console.log("hello");
