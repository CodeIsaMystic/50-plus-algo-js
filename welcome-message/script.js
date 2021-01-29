const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

const myName = document.querySelector("input");
//console.log(button1);




///************************************
button1.addEventListener("click", showMessage);
button2.addEventListener("click", showOutput);




///************************************
function showMessage() {
  //console.log("Hello Ju");
  output1.innerHTML = "<h1>Hello welcome, " + myName.value + "</h1 >";
}

function showOutput() {
  const date = new Date();
  let current = date.getHours();
  let message;

  if (current > 17) message = "its evening";
  else if (current > 12) message = "its afternoon";
  else if (current > 0) message = "its morning";
  else message = "something is wrong";

  output2.innerHTML = "<h2>" + message + "</h2>";

  //console.log(date.getHours());
  //console.log("works");
}