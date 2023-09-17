let song = ["Tere Waste", "Channa Mereya", "Aao raja", "OO laa la", "Tera ghata", "Barish Lete anna"]
let number = [5, 9, 879, 65, 65, 45, 56, 5, 4, 8, 7, 63, 65]
// function myTop3(top1, top2, top3) {
//     console.log("The 3rd Top song is  " + top3)
//     console.log("The 2nd Fav Top song is  " + top2)
//     console.log("The 1st Most Fav Top song is  " + top1)
// }

// myTop3(...song)

// song.forEach((x, y) => { console.log("My top " + y + " song is " + x) })

// function devidebyfive(arg) {
//     return arg / 5
// }
// let number2 = number.map(devidebyfive)
// console.log(number2)

// function addFIRST(arg) {
//     return arg + " This is the first"
// }

// let songFirst = song.map(addFIRST)
// console.log(songFirst)

// let [first, second, third, ...rest] = song
// console.log(rest)
// function taxCal(tax, ...items) {
//     return (items.map(item => item * tax))
// }

// let myitems = taxCal(100000, ...number);
// console.log(myitems)

// let strings = "This is a string --"
// let arreey = { ...strings }

// let numObj = { ...number }
// console.log(numObj)

function count(...basket) {
    console.log(basket.length)
}
count(10, 9, 8, 7, 6)