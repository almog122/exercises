const createHeader = function () {
  const header = document.createElement("h1");
  header.innerHTML = "The Best Game Ever";
  header.style.color = "#c0392b";
  header.style.fontFamily = "Helvetica";
  document.body.appendChild(header);
};

const createSubHeader = function () {
  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "Game by: ~The Creator~";
  subHeader.setAttribute("class", "Creator");
  subHeader.style.color = "green";
  document.body.appendChild(subHeader);
};

createHeader();
createSubHeader();

const ball = document.getElementById("ball");
const moveDistance = 15;
const limitRight = 405;
const limitDown = 405;
const limitLeft = 0;
const limitUp = 0;

const ballPostion = function(postion){

  if(postion == 'left'){
    return currentLeft = parseInt(ball.style.left) || 0;
  }

  if(postion == 'top'){
    return currentLeft = parseInt(ball.style.top) || 0;
  }
}

const moveRight = function () {
  let currentLeft = ballPostion('left')

  if (currentLeft < limitRight) {
    currentLeft += moveDistance;
    ball.style.left = currentLeft + "px";
  }
};

const moveLeft = function () {
  let currentLeft = ballPostion('left')

  if (currentLeft > limitLeft) {
    currentLeft -= moveDistance;
    ball.style.left = currentLeft + "px";
  }
};

const moveUp = function () {
  let currentTop = ballPostion('top')

  if (currentTop > limitUp) {
    currentTop -= moveDistance;
    ball.style.top = currentTop + "px";
  }
};

const moveDown = function () {
  let currentTop = ballPostion('top')

  if (currentTop < limitDown) {
    currentTop += moveDistance;
    ball.style.top = currentTop + "px";
  }
};

const playingField = document.getElementById("container");

playingField.addEventListener("keydown", function moveKey(button) {
  let key = button.key;

  if (key == "ArrowRight") {
    moveRight();
  }

  if (key == "ArrowLeft") {
    moveLeft();
  }

  if (key == "ArrowUp") {
    moveUp();
  }

  if (key == "ArrowDown") {
    moveDown();
  }
});
