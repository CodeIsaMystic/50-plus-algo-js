const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
//console.log(buttons);

let winner = [0, 0];




/// **************************************************
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}



/// *************************************************
function playGame(event) {
  //console.log(event.target.innerText);
  let playerSelection = event.target.innerText;
  let computerSelection = Math.random();

  if (computerSelection < 0.34) {
    computerSelection = "Rock";
  } else if (computerSelection <= 0.67 && computerSelection >= 0.34) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
  //console.log(`${computerSelection} vs ${playerSelection}`);

  let result = checkWinner(playerSelection, computerSelection);
  //console.log(result);

  if (result == "Player") {
    result += " wins!";
    winner[0]++
  } else if (result == "Computer") {
    result += " wins!";
    winner[1]++;
  } else result += " results in a tie match";

  score.innerHTML = `
      <small>Player</small> [${winner[0]}] 
      <small>Computer</small> [${winner[1]}]
      `;

  messager(`
      ${playerSelection} vs ${computerSelection}
      <br> <b> ${result} </b>  
    `);
}



function messager(msg) {
  message.innerHTML = msg;
}



function checkWinner(player, cpu) {
  if (player === cpu) {
    return "Draw";
  }
  if (player == "Rock") {
    if (cpu === "Paper") { return "Computer"; }
    else { return "Player" }
  }
  if (player === "Paper") {
    if (cpu === "Scissors") { return "Computer"; }
    else { return "Player"; }
  }
  if (player === "Scissors") {
    if (cpu === "Rock") { return "Computer"; }
    else { return "Player"; }
  }
}






























