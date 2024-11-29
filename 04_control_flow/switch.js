// this is switch syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = "march"

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feburary");
//         break;
//     case 3:
//         console.log("March");
//         break;                                   // break; is necessary to add here, bcos if we dont add break then after matching the case, 
//                                                     //all the other cases after the matched case will be excuted, except default case
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");       
//         break;
// }

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feburary");
        break;
    case "march":
        console.log("March");
        break;                                   
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case match");       
        break;
}