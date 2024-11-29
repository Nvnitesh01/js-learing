//this keyword = this keyword used two call the values in current context

const user = {
    username: "Nitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website. Your cart price is ${this.price}₹`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);  // it will give {} empty paranthesis, bcos this console.log is outside a block scope and there is no value in global scope




// function chai() {
//     let username = "Nitesh"
//     console.log(this.username);   // this.variable is not working in the function, only working in objects 
    
// }
// chai()

// const chai = function () {
//     let username = "Nitesh"
//     console.log(this.username);    // this.variable is not working in the function, only working in objects 
// }

// +++++++++ arrow +++++++++++
const chai = () => {
    let username = "Nitesh"
    console.log(this.username);  
}
// chai()

// this is basic arrow function
// const addTwo = (num1, num2) => {      // if we use curly brasis{} then we have to write return keyword, 
//     return num1 + num2               //it is also called explicit return, meaning we are applying the return keyword
// }


    // implicit return method
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"Nitesh"})  // object return in implicit return method, remember to wrap object in paranthesis ({})

console.log(addTwo(5, 6));
