const wording = ["Do you like Javascript as much as I do?", "Hope you are having fun this is a simple game you can make", "Source code is included so you can create your own version of this challenge"];
let startTime;
let endTime;




/// *********************************************
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");




/// **********************************************
button.addEventListener("click", function () {
  //console.log(this.innerText);

  if (this.innerText == "Start") {
    playText.disabled = false;
    playGame();
  }
  else if (this.innerText == "Done") {
    playText.disabled = true;
    button.innerText = "Start";
    endPlay();
  }
});



/// **********************************************
function endPlay() {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime - startTime) / 1000);
  console.log(totalTime);
  let str = playText.value;
  // count words
  // divide by total time words/per minute
  // output finale message to player
}


function playGame() {
  //console.log("func ran!!")
  //let randomNum = Math.floor(Math.random() * 10);
  let randomNum = Math.floor(Math.random() * wording.length);
  //console.log(randomNum);
  message.innerText = wording[randomNum];

  let date = new Date();
  startTime = date.getTime();
  console.log(startTime);
  button.innerText = "Done";
}


/// **********************************************