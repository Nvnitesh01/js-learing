const score = 400; // here, js automatically detect the datatype of score ie: number.

const balance = new Number(100)  // by using 'new Number()' we are explictly defining this as number and this is also a another way to declare a number
// console.log(balance);
 
// console.log(balance.toString());  // by using .toString() the number datatype coverts into string datatype
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // .toFixed() is used to give round digits after decimal. for ex: new Number(152.256) = ouput is 152.26

const otherNumber = 123.8546
// console.log(otherNumber.toPrecision(4));  // .toPrecision() is used for to give precised value.

const hundreds = 100000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));  // India uses thousands/lakh/crore separators


//+++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-5));              // Math.abs is known as absolute value..abs(absolute) converts minus(-) value into plus(+)
                                           // -5 converts into 5, note: Math.abs() only converts - to +, not the other way around

// console.log(Math.round(4.6));           // the answer is 5, bcos its above .5, if the value was less than 4.5 then the round value would come 4
// console.log(Math.ceil(4.2));            // answer is going to be 5, cos math.ciel() always gives equal or greater number then the value.
// console.log(Math.floor(4.8));           // answer is going to be 4, cos math.floor() always gives equal or smaller number then the value.
// console.log(Math.min(5, 8, 3, 2));      // answer is 2, cos Math.min() gives the smallest number
// console.log(Math.max(5, 8, 3, 2));      // answer is 8, cos Math.min() gives the largest number

console.log(Math.random());                // Math.random() gives the value between 0 to 1 for ex: 0.1,0.5, 0.3 etc   
console.log((Math.random()*10) + 1);       // in Math.random(), to get the value more then 0 we add *10 so that lowest value comes 1, 
                                            // but if Math.random() gives 0.0344, by adding *10 in this value it would still give minimum value 0,
                                            // so to avoid this problem we give *10 + 1 for ex: console.log((Math.random()*10) + 1); now it will return the minimum value 1

console.log(Math.floor(Math.random()*10) + 1);  // by adding Math.floor with Math.random, we will get the round value not in decimals

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min + 1) + min));
console.log(Math.floor(Math.random()* (max-min + 1) + max));





