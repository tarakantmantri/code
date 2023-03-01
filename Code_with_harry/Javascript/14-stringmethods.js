let myname = 'Tarakanta Mantri'
console.log(myname.length)
console.log(myname.toUpperCase())
console.log(myname.toLowerCase())
console.log(myname.slice(4, 11))
console.log(myname.slice(4))
console.log(myname.replace('a', 'n'))
let friend = 'Subham'
console.log(myname.concat(' is a friend of ', friend, " yes"))
let sentence = myname.concat(' is a friend of ', friend, " yes")
console.log(sentence.trim())

for (let i = 0; i < myname.length; i++) {
    console.log(myname[i])
}