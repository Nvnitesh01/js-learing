// const result = myNumber.filter((num) => num > 55);
// console.log(result);

// .slice includes the 1st range and exculde the last range
var user = ["Ted", "Toni", "Rita", "Ton", "Sam", "Cap", "Mar"]  
console.log(user.slice(1, 3));  // ans [ 'Toni', 'Rita' ]
console.log(user.slice(1, 4));  // ans [ 'Toni', 'Rita', 'Ton' ]
console.log(user.slice(0, 4));  // ans [ 'Ted', 'Toni', 'Rita', 'Ton' ]

/* What if we only use slice(1) */
// console.log(user.slice(1));  // ans [ 'Toni', 'Rita', 'Ton', 'Sam', 'Cap', 'Mar' ] 
                            // what .slice(1) did is removed the 1st range 'Ted' and return other ranges
       
                            
/*Splice */

user.splice(1, 3, 'Hi', "bye"); 
console.log(user);  // ans [ 'Ted', 'Hi', 'Sam', 'Cap', 'Mar' ]
                    // what splice did is after 0(Ted) it removes 1(Toni), 2(Rita), 3(Ton) and replace that with our value which is "Hi" and continued the range after that

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]
const other_heros = ["Martian", "Nightwing", "Invincible"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...other_heros]
// console.log(all_new_heros);


function addTwoNumbers(number1, number2){
    // let result = number1 + number2 
    // return result 
    return number1 + number2  
} 
const result= addTwoNumbers(3, 5)
// console.log("Return:", result);

function loginUSerMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter name"); 
    //     return       
    // }
                //OR
    if(!username){
        console.log("Please enter name"); 
        return       
    }
    return `${username} just logged in`
}
// console.log(loginUSerMessage("Nitesh"));

function calculateCartPrice(val1, val2, ...num1) {
    return val1 + val2 + "," + num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));





