let count = 0;

for (let i = 0; i <= 1000000000; i++) {
    const str = i.toString();

    if (str.includes('7')) {
        // console.log("the numbers are  " + i)
        count++;
    }
}

console.log("The number of times 7 comes is " + count);
let avg = (count * 100) / 1000000000
console.log("the avorage " + avg)