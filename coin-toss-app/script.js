const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const coinArray = ["Heads", "Tails"];
let score = [0, 0];

// console.log(buttons);

/// **********************************
for (let i = 0; i < buttons.length; i++) {
  //console.log(buttons[i]);
  buttons[i].addEventListener('click', tossCoin);

}

/// **********************************
function tossCoin(event) {
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  let playerGuess = event.target.innerText;
  let output;

  //console.log("Player:" + event.target.innerText);
  //console.log("Computer: " + coinArray[computerToss]);


  if (playerGuess === computerGuess) {
    // win
    output = "Player Wins";
    score[0]++;
  } else {
    // loose
    output = "Computer Wins";
    score[1]++;
  }

  message.innerHTML = `Computer selected ${computerGuess} <br> ${output} <br>Player ${score[0]} Computer ${score[1]}`;
  //console.log(message.innerHTML)
}