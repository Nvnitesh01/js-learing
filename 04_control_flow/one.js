// <(less then), >(greater then), <=(less and equal), >=(greaterthen and equal), 
//==(equal), !=(not equal), ===(strict or triple equal/checks type also), !==(strict inequality)

// if
// const isUserloggedIn = true
// const temprature = 35

// if (temprature < 38) {
//     console.log("less than 38");
// } else {
//     console.log("temprature is greater than 38");
// }

// const score = 200
// if (score > 100) {
//     const power = "fly"                              // remember not to use var
//     console.log(`User power: ${power}`);
// }


// short hand notation

// const balance = 1000

// if (balance > 500) console.log("test");   // short hand notation, inplicit scope/ man liya hai ke yaha scope hai

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if (isUserloggedIn && debitCard) {
    console.log("Allow to buy course");
} 

if (loggedinFromGoogle || loggedinFromEmail) {
    console.log("User logged in");
}

