"use strict";
function abcd(obj) { }
abcd({ name: "khan", email: "abc@gmail.com", password: "khan" });
let a; //we can assign null number or string
//classes and objects
class device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
let d1 = new device();
//bottlemaker
class bottle {
    constructor(name, price, material) {
        this.name = name;
        this.price = price;
        this.material = material;
    }
}
let b1 = new bottle("milton", 1200, "metal");
//human
class human {
    constructor(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
    }
}
let h1 = new human("one", true);
