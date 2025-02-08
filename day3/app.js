"use strict";
//this keyword
class greet {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
let h1 = new greet(`hello ${"world"}`);
//extend
class user {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class exuser extends user {
    constructor(email) {
        super(name);
        this.email = email;
    }
    changeName() {
        this.name = "hello";
    }
}
let u1 = new user("hellyo");
let ex1 = new exuser("abc@gmail.com");
ex1.changeName();
//functions
function hello() {
    console.log("hello");
}
function one(name, email) {
    console.log(email);
}
one("one", "abc@gmail.com");
