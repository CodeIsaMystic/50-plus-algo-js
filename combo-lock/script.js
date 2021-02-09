/// ***************************************************
const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");

let score = 0;
let gamePlay = false;

/// *****************************************************
function gameEnd() {
  gamePlay = false;
  message.innerHTML = "You solved the combo in " + score + " guesses";
  button.innerHTML = "Restart Game";
}

function maker(num) {
  for (let x = 0; x < num; x++) {
    let el = document.createElement('input');
    el.setAttribute('type', "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = "50px";
    el.classList.add("numb");
    el.order = x;
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    gameArea.appendChild(el);
  }
}


/// *****************************************************
button.addEventListener("click", function () {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    gameArea.innerHTML = "";
    maker(6);
    message.innerHTML = "Guess the combo";
    button.innerHTML = "Check Combo";
  } else {
    const numbers = document.querySelectorAll(".numb");
    let winCondition = 0;
    score++;
    message.innerHTML = "Guesses " + score;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "white";
        winCondition++;
      } else {
        let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black"
      }

      if (winCondition == numbers.length) { gameEnd() };
    }
  }

});