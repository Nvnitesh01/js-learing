// let score = 33;  this is number form
let score = "33abc";  // with "", its value becomes a string

// console.log(typeof "score");    //this is string
// console.log(typeof score);      //this is number
// console.log(typeof (score));    //this is number
// console.log(typeof 33);         //this is number

// In order to change this is string into number, we will going to declare a new variable known as valueInNumber

let valueInNumber = Number(score)  // now its converted into number
// console.log(typeof valueInNumber); // by using typeof , we will check if its converted into number or not
// console.log(valueInNumber);



/*Notes*/
// "33" => 33   // "33"-string can change into 33-number
// "33abc" => NaN   // "33"-string cannot change into number, and its value become NaN(not a number)
// true => 1 // its giving the value of 1
// false => 0 // its giving the value of 0

// lets create a one more variable 

let isLoggedIn = "Nitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// "Nitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


/*****************************Opertaions********************************/

let value = 3;
let negValue = -value
// console.log(negValue);

let str1 = "Hello"
let str2 = " Nitesh"
let str3 = (str1 + str2)  // strings can only can added not substracted or multiply, divison etc
console.log(str3);

// console.log("1" + 2);   //  if string comes first then every number after string count as string ex- console.log("1" + 2); = 12
// console.log(1 + "2");            // answer = 12 
// console.log("1" + 2 + 2);       // answer = 122
// console.log(1 + 2 + "2");       // ans = 32

console.log( (3 + 4) * 5 % 3);  // use parentheses symbol () 

// console.log(+true);
// console.log(+"");

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

