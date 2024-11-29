//for in loop

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const programming = ['js', 'cpp', 'rb', 'py']

for (const key in programming) {
    console.log(programming[key]);
}