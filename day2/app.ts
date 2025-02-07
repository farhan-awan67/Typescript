//interfaces
interface user {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function abcd(obj: user) {}
abcd({ name: "khan", email: "abc@gmail.com", password: "khan" });


//type aliases
//mean creating own data types
type value = null | string | number;
let a: value;//we can assign null number or string


//classes and objects
class device{
    name="lg";
    price=12000;
    category= "digital";
}

let d1 = new device();

//bottlemaker
class bottle{
    constructor(public name:string, public price:number, public material:string){
    }
}
let b1 = new bottle("milton", 1200, "metal");

//human
class human{
    constructor(public name: string, public isHandsome:boolean){}
}

let h1 = new human("one", true);