// 1 
let age = prompt("enter age");
age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
    console.log(`yes the age is between 10 & 20 Becz the age is ${age}`)
}
else {
    console.log('the age is not in between')
}

// 2
let day = "defult"
switch (age) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(day);

//3 
if (age % 2 === 0 && age % 3 === 0) {
    console.log(`the number ${age} is divisiable by 2 and 3`)
}
else {
    console.log(`the number ${age} is  not  divisiable by 2 and 3`)
}

//4

if (age % 2 === 0 || age % 3 === 0) {
    console.log(`the number ${age} is divisiable by 2 or 3`)
}
else {
    console.log(`the number ${age} is  not  divisiable by 2 or 3`)
}
// Problem 4 