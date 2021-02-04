const wording = ["Do you like Javascript as much as I do?", "Hope you are having fun this is a simple game you can make", "Source code is included so you can create your own version of this challenge"];




/// *********************************************
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");




/// **********************************************
button.addEventListener("click", function () {
  console.log(this.innerText);

  if (this.innerText == "Start") {
    playText.disabled = false;
    playGame();
  }
});

function playGame() {
  console.log("func ran!!")
}


/// **********************************************