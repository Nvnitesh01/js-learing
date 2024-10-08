// let score = 33;  this is number form
let score = "33abc";  // with "", its value becomes a string

// console.log(typeof "score");    //this is string
// console.log(typeof score);      //this is number
// console.log(typeof (score));    //this is number
// console.log(typeof 33);         //this is number

// In order to change this is string into number, we will going to declare a new variable known as valueInNumber

let valueInNumber = Number(score)  // now its converted into number
console.log(typeof valueInNumber); // by using typeof , we will check if its converted into number or not
console.log(valueInNumber);



/*Notes*/
// "33" => 33   // "33"-string can change into 33-number
// "33abc" => NaN   // "33"-string cannot change into number, and its value become NaN(not a number)
// true => 1 // its giving the value of 1
// false => 0 // its giving the value of 0

// lets create a one more variable 

let isLoggedIn = "Nitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// "Nitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



