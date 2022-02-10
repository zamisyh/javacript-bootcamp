// const fruit = "orange"

// switch (fruit) {
//     case "apple":
//         console.log('red')
//         break;

//     case "orange":
//         console.log("orange")
//         break;

//     case "banana":
//         console.log('yellow')
//         break;
//     default:
//         console.log("I don\'t know it")
//         break;
// }

let today = new Date().getDay()

switch (today) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        break;
}