// var c =300
let a = 300
// everything written inside curly brasis is block scope..everything outside is global scope
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Nitesh"
    
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    return two()
    
}

// return one()

if (true) {
    const username = "Nitesh"
    if (username === "Nitesh") {
        const website = " Facebook"
        // console.log(username + website);        
    }
    // console.log(website);  // error removed
    
}

// console.log(username);  // error removed


// ++++++++++++++++++++  interesting ++++++++++++++++++

function addOne(num) {
    return num + 1
}

console.log(addOne(5))

const addTwo = function(num) {
    return num + 2 
}

console.log(addTwo(5));
