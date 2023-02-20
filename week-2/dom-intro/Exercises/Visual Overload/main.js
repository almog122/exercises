const container = document.getElementById("container")

const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

const changeBoxColor = function(){

    this.style.backgroundColor = getRandomColor();
}

for(let i = 0; i <= 4; i++){
    const box = document.createElement("div")

    box.className = "box";
    box.addEventListener("mouseover" , changeBoxColor)

    container.appendChild(box);
}

