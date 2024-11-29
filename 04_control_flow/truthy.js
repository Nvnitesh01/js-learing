const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
    
// }

// +++++++falsy values++++++++
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// +++++++truthy values++++++++
// true, "0"(0 inside string is a truthy value), 'false'(this false is under string thats why its a truthy value)," ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Arrary is empty");
    
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
    
// }

// Nullish Coalecsing operator (??) null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



