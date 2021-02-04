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
    endGame();
  }
});



/// **********************************************
function endGame() {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime - startTime) / 1000);
  //console.log(totalTime);
  let str = playText.value;

  // count words
  let wordCount = wordCounter(str);
  // divide by total time words/per minute
  let speed = Math.round((wordCount / totalTime) * 60);
  // output finale message to player
  let finalMessage = "You typed at " + speed + " words per minute.";
  //console.log(speed);
  finalMessage += "<br>" + compareWords(message.innerText, str);

  message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
  let response = strWords.split(' ').length;
  //console.log(response);
  return response;
}

function compareWords(str1, str2) {
  let words1 = str1.split(' ');
  let words2 = str2.split(' ');
  let count = 0;
  words1.forEach(function (item, index) {
    //console.log(item, words2[index]);
    if (item == words2[index]) {
      count++;
    }
  })
  //console.log(count + " correct out of " + words1.length);
  return (count + " correct out of " + words1.length + " words");
}


function playGame() {
  //console.log("func ran!!")
  //let randomNum = Math.floor(Math.random() * 10);
  let randomNum = Math.floor(Math.random() * wording.length);
  //console.log(randomNum);
  message.innerText = wording[randomNum];

  let date = new Date();
  startTime = date.getTime();
  //console.log(startTime);
  button.innerText = "Done";
}


/// **********************************************