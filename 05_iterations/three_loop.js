// for of loop

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

//for of loop
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//+++++++++ Maps++++++++++

const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map) {           // array destructred by adding [key, value]
    // console.log(key, "=", value);
}

const myObj = {
    'game1': 'God of War',
    'game2': 'Spiderman',
    'game3': 'RDR2'
}

// for (const [key, value] of myObj) {
//     console.log(key, "=", value);        // for of loop  will not work on objects
// } 