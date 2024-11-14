const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]
const other_heros = ["Martian", "Nightwing", "Invincible"]

// marvel_heros.push(dc_heros)  //  push() method in array simply add the array as an new single  element entity in the existing array.
// console.log(marvel_heros);  // ans - [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]  .. it take array into array
// console.log(marvel_heros[3]);  // whole [ 'Batman', 'Superman', 'Flash' ] array counts as an element.

// const allHeros = marvel_heros.concat(dc_heros)  //concat() method help us achieving a desisered output, like merging the two array, 
                                                //but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...other_heros]  // this is called spread operator..Despite push and concat we should use spread operator. by []...array, ...array, ...array]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  // .flat() instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);
 
console.log(Array.isArray('Nitesh'));  // Array.isArray() is to check whether it is an array or not
console.log(Array.from('Nitesh'));   // Array.from() converts whatever value inside the brackets into Array.
console.log(Array.from({name:'Nitesh'}));   // Interesting case // .from() cant directly coverts object insides brackets so it returing an empty array like this[].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // Array.of() instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.


