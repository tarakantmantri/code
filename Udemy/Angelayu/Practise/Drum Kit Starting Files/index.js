// for mouse click
document.addEventListener("keydown", (e) => {
    sound(e.key);
    console.log(e.key);
    flashKey(e.key)

})

// for keybord press
var button = document.querySelectorAll(".drum")
for (let i = 0; i <= button.length; i++) {
    button[i].addEventListener("click", function () {
        sound(this.innerHTML);
        console.log(this.innerHTML)
        flashKey(this.innerHTML)


    })
}


//SoundFunction

function sound(bname) {

    switch (bname) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()

            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()

            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()

            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()

            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()

            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()

            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()

            break;

        default:
            break;
    }
}

//Flaash function
function flashKey(key) {
    let activeKey = document.querySelector("." + key)
    activeKey.classList.toggle("pressed")
    setTimeout(function () { activeKey.classList.toggle("pressed") }, 100)
}
