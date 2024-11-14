// const tinderUser = new Object()  // result = {} - this is singleton object
const tinderUser = {}       // result = {} - this is object literal  ,  basically we can declare the object in both ways, just different way to declare

tinderUser.id = "123abc"
tinderUser.name = "Nitesh"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {            // we can create objects inside object.. this is called nesting 
            fistname: "Nitesh",
            lastname: "Verma",
        }
    }
}
// console.log(regularUser.fullname.userfullname.fistname);

const obj1 = {u1:"a", u2:"b"}
const obj2 = {z1:"a", z2:"b"}

// const obj3 = Object.assign({}, obj1, obj2)  // The Object.assign() is a method used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the target object. 
const obj3 = {...obj1, ...obj2}             // this is the new method of adding multiple objects, this is most usable
// console.log(obj3);

const users = [
    {
        id:1,
        email: "nitesh01@gmail.com"
    },
    {
        id:2,
        email: "nitesh02@gmail.com"
    },
    {
        id:3,
        email: "nitesh03@gmail.com"
    }
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("email"));   // with .hasOwnProperty() we can check if a particular property has in the object or not.


/*** object destructuring***/

const course = {
    coursename: "Javascript",
    price: 999,
    courseInstructor: "Hitesh" 
}

// course.courseInstructor = "Nitesh"    

// const {courseInstructor} = course  // we can changte the property name by this method by just
// console.log(courseInstructor);
const {courseInstructor: Instructor} = course  // we can changte the property name by this method by using : after the property name.
console.log(Instructor);

// react dom example

// const navbar = ({company}) => {
// }
// navbar(company = "nvcreations")

// API   





