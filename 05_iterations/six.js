//++++++ filter() +++++

// const coding = ['js', 'cpp', 'rb', 'py', 'ruby']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myNums.filter( (num) => num > 4 )    // 1. withoutuse of fuction scope / means curly brasis, ( do not need return keyword to get value)
// const newNumbs = myNums.filter( (num) => {               // 2. with use of function scope / means curly brasis. (needs return keyword to get value)
//     return num > 4
// } )                                                      // both ways of filter are correct but in 2nd condition, when we use curly brasis then we have to write return to get the value



//+++++with for each+++++++

// const newNumbs = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNumbs.push(num)
//     }
// } )

// console.log(newNumbs);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let  userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} )


console.log(userBooks);
  

