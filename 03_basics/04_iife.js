//(Immediately Invoked Function Expression) IIFE

(function chai(){                       // it is named iffe
    console.log(`DB CONNECTED`);
})();

( (name) =>{                             // it is simple iffe
    console.log(`DB CONNECTED TWO ${name}`);  
} )("Nitesh")