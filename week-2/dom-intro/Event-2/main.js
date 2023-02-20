// const box = document.getElementById("box")
// box.onclick = function () {
//     box.innerHTML = "clicked"
// }

// box.onmouseenter = function(){
//     box.style.backgroundColor = "green"
// }

const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!