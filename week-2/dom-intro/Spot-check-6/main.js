
const list = document.getElementById("list");

const clickOnList = function(){
    const newItem = document.createElement("li")

    newItem.innerHTML = "A new item"

    list.appendChild(newItem);
}