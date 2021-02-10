const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");

const myArray = ["javascript", "website", "html", "document", "course", "new"];

let inPlay = false;
let scramble = "";
let scrambled = "";
let score = 0;

/// **********************************************
button.addEventListener("click", function () {
  if (!inPlay) {
    inPlay = true;
    score = 0;
    button.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join("");
    message.innerHTML = scrambled;
  } else {
    let tempGuess = guess.value;
    score++;

    if (tempGuess === scramble) {
      console.log("correct");
      inPlay = false;
      message.innerHTML = "Correct it was " + scramble + " it took " + score + " guesses";
      button.innerHTML = "Start";
      guess.classList.toggle("hidden");
    } else {
      console.log("guess again");
      message.innerHTML = "Wrong " + scrambled;
    }
  }
});




/// **********************************************
function createWord() {
  //console.log("create word");
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  return tempWord;
}


function randomArray() {
  console.log("array");
}