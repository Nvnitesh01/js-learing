const score = 400; // here, js automatically detect the datatype of score ie: number.

const balance = new Number(152.256)  // by using 'new Number()' we are explictly defining this as number and this is also a another way to declare a number
// console.log(balance);
 
// console.log(balance.toString());  // by using .toString() the number datatype coverts into string datatype
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 123.8546
// console.log(otherNumber.toPrecision(4));

// const hundreds = 100000
// console.log(hundreds.toLocaleString());

console.log(Math.random());                // value comes between 0 to 1 ex: 0.1,0.5, 0.3 etc   
console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);