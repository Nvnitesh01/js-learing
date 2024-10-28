
/***** TO MASTER JAVASCRIPT,  MASTER THESE TWO TOPICS - OBJECTS AND BROSWER WEB EVENTS ****/

// There are 2 type of datatypes Primitive and Non-primitive(reference)

// Primitive datatypes
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number datatype
const scoreValue = 100 // also a number datatype
const isLoggedIn = false // boolean type
const outTemprature = null //null type
// let userEmail = undefined  // undefined type
let userEmail;  // also undefined type

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId);
// both const id values look same but when we checked by doing console.log(id === anotherId); the answer comes false. Its bcos Symbol value can be same but its datatype would be different.

const bigNumber = 415843543841586548n // bigInt


// Non-primitive or reference datatypes
// Arrays, Objects, Functions

const heros = ["batman", "superman", "spiderman"];  //  this is array's example..arrays write in [] brackets
let myObj = {
    name: "nitesh",   // whatever values comes inside {} are known as objects, dataypes can be anything like numbers, string etc
    age: "35", 
}

//functions example
const myFunctions = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




/**************** Memory ***********************/

//there are 2 type of memories - Stack and Heap

// Stack memory used in primitive dataypes
// Heap memory used in non-primitive/refrence datatypes

// let myLaptopName = "Lenovo";
// let anotherName = myLaptopName;
// anotherName = "Dell";

// console.log(myLaptopName);
// console.log(anotherName);

let userOne = {
    email: "nvlogan01@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne;
userTwo.email = "nvnitesh01@gmal.com"   // .email ... with(./dot) this is how we change value of property in objects.

console.log(userOne.email);
console.log(userTwo.email);



