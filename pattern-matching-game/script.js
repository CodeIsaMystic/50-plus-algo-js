/// **************************************
const gameColors = ["red", "blue", "green", "yellow"];
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 2;




/// **************************************
window.addEventListener("load", setup);
button.addEventListener("click", function () {
  if (!inPlay) {
    player();
  }
})



/// **************************************
function player() {
  button.disabled = true;
  gameClicks = [];
  userClicks = [];

  runSequence(playNum);
}

function runSequence(num) {
  let squares = document.querySelectorAll(".box");
  num--;

  if (num < 0) {
    inPlay = true;
    return;
  }

  let randomNum = Math.floor(Math.random() * gameColors.length);
  //console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  //console.log(gameClicks);
  squares[randomNum].style.opacity = "1";
  setTimeout(function () {
    squares[randomNum].style.opacity = "0.5";
    setTimeout(function () {
      runSequence(num);
    }, 100);
  }, 500);
}


function setup() {
  //console.log("Page Loaded");
  for (let x = 0; x < gameColors.length; x++) {
    let div = eleFactory("div");
    div.style.backgroundColor = gameColors[x];
    div.classList.add("box");
    div.style.opacity = "0.5";
    div.myColor = gameColors[x];
    div.addEventListener("click", checkAnswer);
    gameArea.appendChild(div);
  }
}

function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = "1";
    setTimeout(function () {
      el.style.opacity = "0.5";
    }, 500);
    if (userClicks.length == gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
}

function endGame() {
  //console.log("GameOver");
  button.disabled = false;

  if (userClicks.toString() == gameClicks.toString()) {
    playNum++;
    console.log("Correct");
  } else {
    console.log("Not Correct");
  }
}


function eleFactory(elType) {
  let ele = document.createElement(elType);
  return ele;
}


