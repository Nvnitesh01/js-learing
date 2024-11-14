// Object.create ..  this is called constructor method, isme singleton banta hai


// {} curly brasis used in object


const mySym = Symbol("key1") 

// object literals - below is the object literals examples
const Jsuser = {
     name: "Nitesh",
     "full name": "Nitesh Verma",
     [mySym]: "key01",
     age: 25,
     location: "Delhi",
     email: "nitesh@google.com",
     isLoggedIn: true,
     lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(Jsuser.name);           // .name is a one way to access a value in object. Mostly we use this method
// console.log(Jsuser["name"]);        // ["name"] is another way to access value in object..
// console.log(Jsuser["full name"]);  // to access this "full name": "Nitesh Verma" this type of value in objects, we have to use console.log(Jsuser["full name"]);
//                                     // otherwise it wont get access.
// console.log(Jsuser[mySym]);

//change the email of Jsuser
Jsuser.email = "nitesh@gmail.com"      // this is how we change or overwrite the value.
console.log(Jsuser.email);
// Object.freeze(Jsuser)               // by using Object.freeze() we freezes the object values and it cant be changed
Jsuser.email = "nitesh@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greeting2 = function(){
    console.log(`Hello ${this.name}, Your age is ${this.age}, your full name is ${this["full name"]}, this is your email ${this.email} id, and you are current location is ${this.location}.
        Your login id is ${this[mySym]} and you have been logged in on ${this.lastLoginDays}`);
}
console.log(Jsuser.greeting2());







