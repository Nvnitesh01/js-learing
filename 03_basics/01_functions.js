//Function

function sayMyname(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}

// 'sayMyname' this is function reference, 'sayMyname()' this is function execution   

//  function addTwoNumbers(number1, number2){     // in funtions, the value inside the brackets are known as parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {    
    // let result = number1 + number2     // one way of writing the function
    // return result
                //OR
    return number1 + number2   // another way to write function without declaring a variable
}

// addTwoNumbers(3, 6)  // giving some value inside the brackets is called argument,calling the arguments

const result = addTwoNumbers(3, 6) 
// console.log("result:", result);


function loginUSerMessage(username) {
    if (username === undefined) {                     // if statement example
        console.log("Please enter the username");  
        return   
    }
    if (!username) {                     // it is equvilant to (username === undefined)
        console.log("Please enter the username");  
        return   
    }
    return `${username} just logged in`
}

// if we already gives a value in function parameters ie: function loginUSerMessage(username = "NV"), then we dont need to check that with 'if' statement
// we can directly return the value by return statement
function loginUSerMessage(username = "NV") {
    return `${username} just logged in`
}
// console.log(loginUSerMessage("Nitesh"));
// console.log(loginUSerMessage());

function calculateCartPrice(val1, val2, ...num1) {   // '...num1' this is rest operate. it use for to pass multiple value in fuction. These '...' also used as spread operartor.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const mySym = Symbol("₹") 
const user = {
    username: "Nitesh",
    price: 199,
    [mySym]: "₹"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}${anyobject[mySym]}`);    
}

// handleObject(user)

//another way to pass object
handleObject({
    username: "Logan",
    price: 599,
    [mySym]: "₹"
})

// arrays example

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
                // or
console.log(returnSecondValue([200, 400, 100, 500]));  // both ways are correct

