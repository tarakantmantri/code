var randomNumber1 = Math.floor(Math.random() * 6 + 1)
var randomNumber2 = Math.floor(Math.random() * 6 + 1)
var leftImg = document.querySelector(".img1")
leftImg.setAttribute("src", `./images/dice${randomNumber1}.png`)
var rightImg = document.querySelector(".img2")
rightImg.setAttribute("src", `./images/dice${randomNumber2}.png`)
var text = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
    text.innerText = "✨Player One Won"
} else if (randomNumber1 < randomNumber2) {
    text.innerText = "Player Two Won ✨"
} else {
    text.innerText = "✨Its a draw !!!✨"
}