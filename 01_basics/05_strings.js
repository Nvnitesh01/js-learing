const name = "Nitesh"
const repoCount = 50

// console.log(name);

// console.log(name +" "+ repoCount + " value");   // dont write like this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  /* this is the right and clear way to write the code and 
                                                                            //  ${} is called string interpolation*/

const gameName = new String("Godofwar")    // by use 'new Sting()' this is also anthor way to declare string

// console.log(gameName.length);
// console.log(gameName[9]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5)); 
// console.log(gameName.indexOf('w')); 

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-7, 3)
console.log(anotherString);

const newStringOne = "  Nitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());  // The trim() method of String values removes whitespace from both ends of this string and returns a new string,
                                    // without modifying the original string.

const url = "https://nitesh.com/nitesh%20verma"
console.log(url.replace('%20', '-'));   //The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement
                                        // first we type the value we want to replace, then by using ',' we write the value we want to replaced with.
                                        // for ex: replace('%20', '-')

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split(' '));

                