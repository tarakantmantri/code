//traditional functions
function addt(a, b) {
    return a + b;

}
let sum = addt(5, 9);
console.log("the sum is " + sum)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        console.log("multiplying " + n + "into" + (n - 1))
        return n * factorial(n - 1);
    }
}
const fact = factorial(5);
console.log("The Factorial is " + fact);

//Arrow function 
let adda = (a, b) => {
    console.log("the addition is " + (a + b))
}
adda(5, 7);
// 