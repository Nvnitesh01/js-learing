/***Arrays***/ 

const myArr = [0, 1, 2, 3, 4, 5,]   // number based array..array difines in square brackets []
const myHeros = ["Batman", "Spiderman", "Ironman"]   // string based array

/* another way of declare arrays */
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myHeros[1]);
// console.log(myArr[1]);

/***Array methods***/ 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()  // .pop() removes the last value

// myArr.unshift(9)  // unshift(9) ** 9 is a argument given inside brackets .unshift(9)**, .unshift() add a new value in the start of array for ex: [9, 0, 1, 2, 3, 4, 5] 
// myArr.shift()  // we dont give any arrgument in shift(), argument mean value inside the brackets .shift(), .shift() removes the first value of array for ex: [ 0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9));   // .includes() used for to know if a particular value is inside a array or not.
// console.log(myArr.indexOf(3));   


// const newArr = myArr.join()  //  basicaly .join()  binds the elements of both variables and converted its datatype from numbers to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

/***slice, splice***/  

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3);  // last range does not include for ex: its ans is [1, 2 ]
console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1, 3);   // ans = C  [ 0, 4, 5 ]  
console.log("C ", myArr);
console.log(myN2);

/***Note***
 * slice() does not manupulate main array.
 * splice() manipulate original array.
 * /






