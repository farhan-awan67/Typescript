//this keyword

class greet {
  constructor(public name: string) {
    this.name = name;
  }
}

let h1 = new greet(`hello ${"world"}`);

//extend

class user {
  constructor(public name: string) {
    this.name = name;
  }
}

class exuser extends user {
  constructor(public email: string) {
    super(name);
  }
  changeName() {
    this.name = "hello";
  }
}

let u1 = new user("hellyo");
let ex1 = new exuser("abc@gmail.com");
ex1.changeName();

//functions
function hello(): void {
  console.log("hello");
}

function one(name: string, email: string): void {
  console.log(email);
}
one("one", "abc@gmail.com");
