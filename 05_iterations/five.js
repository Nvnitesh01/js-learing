// for each loop -- most used loop

const coding = ['js', 'cpp', 'rb', 'py', 'ruby']

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// ++++another way of writing foreach loop with arrow function++++

// coding.forEach( (item) => {
//     console.log(item);
    
// } )


//++++ one more way ++++
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        langName: "Javascript",
        langFile: "js"        
    },
    {
        langName: "Java",
        langFile: "java"        
    },
    {
        langName: "Python",
        langFile: "py"        
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);    
} )