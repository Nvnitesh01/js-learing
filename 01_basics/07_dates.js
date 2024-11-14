// Dates

let myDate = new Date()
// console.log(myDate);     //its gives 2024-11-09T12:54:50.944Z but this is not a proper answer.  
// console.log(myDate.toString());     //  after converting it to string by adding .toString(), its giving proper readable result.
// console.log(myDate.toDateString());     // .toDateString() returns a string representing the date portion of this date with in the local timezone.
// console.log(myDate.toLocaleString());     //
// console.log(typeof myDate);     // its type is object


// Specific Date

// let myCreatedDate = new Date(2024, 0, 9)   // in js months starts from 0, means 0 = jan, 1 = feb etc, but in double digits like 01 = jan
// let myCreatedDate = new Date(2024, 0, 9, 5, 4)   // here 5 and 4 are represented as time, .toLocaleString() full ans = 9/1/2024, 5:04:00 am
let myCreatedDate = new Date("2024-09-11")   //  
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString()); 

// TimeStamp

let myTimeStamp = Date.now()  // we could also do = new date(), let myTimeStamp = Date.now() is another way to create value
// console.log(myTimeStamp);       // it gives time in miliseconds
// console.log(myCreatedDate.getTime());   // its giving date in miliseconds,,   millisecond is use for comparison
// console.log(Math.floor(Date.now()/1000));   // date.now()/1000 gives time in seconds, and we are using Math.foor() or Math.random() to avoid decimals

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());  // its showing 10 instead of 11 bcos js count 0 as jan
// console.log(newDate.getMonth() + 1);  // if we add + 1 after get.Month(), then we will get exact month, which is 11 as of now.
// console.log(newDate.getDay());    // its showing 6 cos js starts counting days from monday, today is saturday thats why its returing 6


/***  String Interpolation  ***/
const message = `Today is ${newDate.getDay()} and time is ${newDate.toTimeString()}`  // ex: of string interpolation
// console.log(message);

const newMessage = newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    calendar: ""
});
// console.log(newMessage);



