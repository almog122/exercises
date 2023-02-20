console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField)

let down = document.getElementById("down");
console.log(down)

document.getElementById("ball").style.backgroundColor = "yellow"

const moveRight = function(){

    let currentLeft = parseInt(document.getElementById("ball").style.left) || 0
    currentLeft += 15

    document.getElementById("ball").style.left = currentLeft + "px"
    console.log(document.getElementById("ball").style.left)
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "Creator")
subHeader.style.color = "green"
document.body.appendChild(subHeader)